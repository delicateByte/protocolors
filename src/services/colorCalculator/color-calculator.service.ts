import { Injectable } from '@angular/core';
import * as chroma from 'chroma.ts';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorCalculatorService {
  complementaryColor: Subject<string>;
  offGray: Subject<string>;
  offWhite: Subject<string>;

  constructor() {
    this.complementaryColor = new Subject<string>();
    this.offGray = new Subject<string>();
    this.offWhite = new Subject<string>();
  }

  generateColorPalette(originalColor: string): void {
    this.calculateComplementary(originalColor);
    this.calculateShadeOfGray(originalColor);
    this.calculateWhiteWithTint(originalColor);
  }

  getSubject(identifier: string): Subject<string>{
    switch (identifier){
      case 'complementary':
        return this.complementaryColor;
      case 'offGray':
        return this.offGray;
      case 'offWhite':
        return this.offWhite;
      default:
        return this.complementaryColor;
    }
  }

  calculateShadeOfGray(originalColor): void{
    let grayColor = '';
    let lastColor = '';
    for (let i = 0; i < 10; i++){
      const currentColor = chroma.color(originalColor).desaturate(i).hex();
      if (currentColor === lastColor && lastColor !== '' ){
        grayColor = chroma.color(originalColor).desaturate(i - 2).hex();
        break;
      }else{
        lastColor = currentColor;
      }
    }
    this.offGray.next(grayColor);
  }

  calculateWhiteWithTint(originalColor): void{
    const hslOriginalColor = chroma.color(originalColor).hsl();
    hslOriginalColor[2] = 0.93;
    this.offWhite.next(chroma.color(hslOriginalColor, 'hsl').hex('rgb'));
  }

  calculateComplementary(originalColor): void {
    const hslOriginalColor = chroma.color(originalColor).hsl();
    hslOriginalColor[0] = hslOriginalColor[0] + 180.0;
    this.complementaryColor.next(chroma.color(hslOriginalColor, 'hsl').hex('rgb'));
  }

  calculateMultipleLighterShades(numberOfShades, originalColor): Array <string> {
    const hslOriginalColor = chroma.color(originalColor);
    const lighterColors = [];
    for (let i = 0; i < numberOfShades; i++){
      const lighterColor = hslOriginalColor.brighter(i + 1 );
      lighterColors.push(chroma.color(lighterColor).hex('rgb'));
    }
    return lighterColors;
  }

  calculateMultipleDarkerShades(numberOfShades, originalColor): Array <string> {
    const hslOriginalColor = chroma.color(originalColor);
    const darkerColors = [];
    for (let i = 0; i < numberOfShades; i++){
      const darkerColor = hslOriginalColor.darker(i + 1 );
      darkerColors.push(chroma.color(darkerColor).hex('rgb'));
    }
    return darkerColors;
  }
}
