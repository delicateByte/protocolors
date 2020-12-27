import { Injectable } from '@angular/core';
import { color } from 'color';
// const Color = require('color');
import { ColorObj } from '../../classes/ColorObj/color-obj';

@Injectable({
  providedIn: 'root'
})
export class ColorCalculatorService {

  constructor() { }

  calculateComplementary(originalColor: ColorObj): Promise<ColorObj>{

    return new  Promise<ColorObj>((resolve) => {
      const colorMax = 255;
      const complemenatryColor = new ColorObj([colorMax, colorMax, colorMax]);
      // Find Complementary Red
      complemenatryColor.rgb[0] = complemenatryColor.rgb[0] - originalColor.rgb[0];
      // Find Complementary Green
      complemenatryColor.rgb[1] = complemenatryColor.rgb[1] - originalColor.rgb[1];
      // Find Complementary Blue
      complemenatryColor.rgb[2] = complemenatryColor.rgb[2] - originalColor.rgb[2];
      resolve(complemenatryColor);
    });

  }
}
