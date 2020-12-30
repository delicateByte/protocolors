import {Component, Input, OnInit} from '@angular/core';
import {ColorCalculatorService} from '../../services/colorCalculator/color-calculator.service';

@Component({
  selector: 'app-output-color',
  templateUrl: './output-color.component.html',
  styleUrls: ['./output-color.component.sass']
})
export class OutputColorComponent implements OnInit {

  @Input()
  colorIdentifier: string;
  @Input()
  title: string;

  color: string;
  constructor(private colorCalculatorService: ColorCalculatorService) {

  }

  ngOnInit(): void {
    this.colorCalculatorService.getSubject(this.colorIdentifier).subscribe((color) => {
      this.color = color;
    });
  }

}
