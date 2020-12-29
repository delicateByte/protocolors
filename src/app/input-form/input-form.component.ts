import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.sass'],
  animations: [
    trigger('enlarge', [
      state('small', style({
        transform: 'translate(-45%, -55%) scale(0) '
      })),
      state('enlarged', style({
        transform: 'translate(-50%, 25%) scale(1) '
      })),
      transition('small => enlarged', [
        animate('0.3s ease')
      ]),
      transition('enlarged => small', [
        animate('0.3s ease')
      ]),
    ]),
  ]
})
export class InputFormComponent implements OnInit {

  @ViewChild('preview') preview: ElementRef;

  color = '#aa0033';
  isOpened = false;


  constructor() { }

  ngOnInit(): void {
  }

  change(event: any): void {
    this.color = event.color.hex;
  }

  togglePicker(e): void{
    this.isOpened = !this.isOpened;
    const el = this.preview.nativeElement;
    el.classList.toggle('is-enlarged');
  }

  closePicker(): void{
    this.isOpened = false;
  }
}
