import { Subject, Observable } from 'rxjs';
import { min, max } from 'lodash';
import * as dragTracker from 'drag-tracker';

class Position {
  constructor(
    public x: number,
    public y: number,
  ) { }
}
export class SVGPosition extends Position { };
export class DOMPosition extends Position { };

export enum DragType {
  Start = 'start',
  Drag = 'drag',
  Stop = 'stop',
}

interface IDragArea<T> {
  min: T;
  max: T;
}
export interface IDragTrack {
  type: DragType;
  container: IDragArea<DOMPosition>;
  svg: IDragArea<SVGPosition>;
}


export class DragTracker {
  private events: Subject<IDragTrack> = new Subject<IDragTrack>();

  get events$(): Observable<IDragTrack> {
    return this.events.asObservable();
  }

  constructor(
    private container: SVGSVGElement
  ) {
    dragTracker.default({
      container: this.container,
      callbackDragStart: (_: any, pos: number[]) => {
        this._next(DragType.Start, pos, pos);
      },
      callback: (_: any, pos: number[], start: number[]) => {
        this._next(DragType.Drag, pos, start);
      },
      callbackDragEnd: (_: any, pos: number[], start: number[]) => {
        this._next(DragType.Stop, pos, start);
      },
    });
  }

  private _next(type: DragType, position: number[], start: number[]): void {
    const xPoints = [start[0], position[0]];
    const yPoints = [start[1], position[1]];

    const container: IDragArea<DOMPosition> = {
      min: new DOMPosition(min(xPoints), min(yPoints)),
      max: new DOMPosition(max(xPoints), max(yPoints)),
    };

    const svg: IDragArea<SVGPosition> = {
      min: this._toSVGPosition(container.min),
      max: this._toSVGPosition(container.max),
    };

    this.events.next({ type, container, svg });
  }

  private _toSVGPosition(position: DOMPosition): SVGPosition {
    const boxOffset: ClientRect = this.container.getBoundingClientRect();
    const ctm: DOMMatrix = this.container.getScreenCTM();
    const point: DOMPoint = this.container.createSVGPoint();
    point.x = position.x + boxOffset.left;
    point.y = position.y + boxOffset.top;
    const transformed: DOMPoint = point.matrixTransform(ctm.inverse());
    return new SVGPosition(transformed.x, transformed.y);
  }

}
