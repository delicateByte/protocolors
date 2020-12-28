import { Component, OnInit } from '@angular/core';
import {ColorCalculatorService} from '../../services/colorCalculator/color-calculator.service';

@Component({
  selector: 'app-output-box',
  templateUrl: './output-box.component.html',
  styleUrls: ['./output-box.component.sass']
})
export class OutputBoxComponent implements OnInit {

  constructor(private colorCalculatorService: ColorCalculatorService) {
  }

  ngOnInit(): void {
  }

}
