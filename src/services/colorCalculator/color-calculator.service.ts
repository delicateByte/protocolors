import { Injectable } from '@angular/core';
import * as chroma from 'chroma.ts';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorCalculatorService {

  constructor(originalColor: string) {
    this.complementaryColor = new Observable<string>((observer) => {
      observer.next(this.calculateComplementary(originalColor)); });
    this.multipleLighterShades = new Observable<Array<string>>((observer) => {
      observer.next(this.calculateMultipleLighterShades(3, originalColor)); });

  }
  complementaryColor: Observable<string>;
  multipleLighterShades: Observable<Array<string>>;
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

}
