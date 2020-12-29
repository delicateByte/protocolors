import { Injectable } from '@angular/core';
import * as chroma from 'chroma.ts';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorCalculatorService {
  complementaryColor: Observable<string>;
  multipleLighterShades: Observable<Array<string>>;
  multipleDarkerShades: Observable<Array<string>>;
  constructor() {

  }

  generateColorPalette(originalColor: string){
    this.complementaryColor = new Observable<string>((observer) => {
      observer.next(this.calculateComplementary(originalColor)); });
    this.multipleLighterShades = new Observable<Array<string>>((observer) => {
      observer.next(this.calculateMultipleLighterShades(3, originalColor)); });
    this.multipleDarkerShades = new Observable<Array<string>>((observer) => {
      observer.next(this.calculateMultipleDarkerShades(3, originalColor)); });
  }


calculateComplementary(originalColor): string {
    const hslOriginalColor = chroma.color(originalColor).hsl();
    hslOriginalColor[0] = hslOriginalColor[0] + 180.0;
    return chroma.color(hslOriginalColor, 'hsl').hex('rgb');
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
