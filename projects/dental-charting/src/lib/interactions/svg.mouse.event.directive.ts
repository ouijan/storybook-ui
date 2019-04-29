import { Directive, OnInit, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { DragTracker, IDragTrack } from './drag-tracker';
import { Subscription } from 'rxjs';

type ISVGMouseEvent = IDragTrack;

@Directive({
  selector: 'svg [dcSVGMouseEvent]'
})
export class SVGMouseEventDirective implements OnInit, OnDestroy {
  private eventSub: Subscription = Subscription.EMPTY;
  private drag: DragTracker;
  @Output(`dcSVGMouseEvent`) event: EventEmitter<ISVGMouseEvent>;

  constructor(element: ElementRef) {
    this.drag = new DragTracker(element.nativeElement);
  }

  ngOnInit(): void {
    this.eventSub = this.drag.events$.subscribe((event) => {
      this.event.emit(event);
    });
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe();
  }

}
