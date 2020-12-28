import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-output-color',
  templateUrl: './output-color.component.html',
  styleUrls: ['./output-color.component.sass']
})
export class OutputColorComponent implements OnInit {

  @Input()
  color: string;
  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
