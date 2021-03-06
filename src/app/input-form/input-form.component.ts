import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger,} from '@angular/animations';
import {ColorCalculatorService} from '../../services/colorCalculator/color-calculator.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.sass'],
  animations: [
    trigger('showPicker', [
      state('small', style({
        transform: 'translate(-50%, -60%) scale(0) rotate(30deg)'
      })),
      state('enlarged', style({
        transform: 'translate(-50%, 30%) scale(1) '
      })),
      transition('small => enlarged', [
        animate('0.3s ease')
      ]),
      transition('enlarged => small', [
        animate('0.3s ease')
      ]),
    ]),
    trigger('enlarge', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('enlarged', style({
        transform: 'scale(5)',
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
  color = '#aa0033';
  isOpened = false;

  constructor(private colorCalculatorService: ColorCalculatorService) { }

  ngOnInit(): void {
    setTimeout(() => { // done asynchronously so the output color components have time to subscribe first
      this.colorCalculatorService.generateColorPalette(this.color);
    }, 100);
  }

  change(event: any): void {
    this.color = event.color.hex;
    this.colorCalculatorService.generateColorPalette(this.color);
  }

  togglePicker(e): void {
    this.isOpened = !this.isOpened;
  }

  closePicker(): void {
    this.isOpened = false;
  }
}
