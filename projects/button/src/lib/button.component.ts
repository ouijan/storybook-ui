import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'ui-button',
  template: `
    <div class="card">
      <button [disabled]="disabled" (click)="action.emit()">
        {{ text }}
      </button>
    </div>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() disabled = false;
  @Output() action = new EventEmitter();

  ngOnInit() {
    console.log(this);
  }

}
