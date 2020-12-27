import { Component, OnInit } from '@angular/core';
import {Color} from 'ngx-color';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.sass']
})
export class InputFormComponent implements OnInit {

  color = '#ffaacc';
  isOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  change(event: any): void {
    this.color = event.color.hex;
  }

  closePicker(): void{
    this.isOpened = false;
  }
}
