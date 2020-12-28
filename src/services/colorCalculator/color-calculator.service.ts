import { Injectable } from '@angular/core';
import * as chroma from 'chroma.ts';
// import {from, Observable} from 'rxjs';
// const observable = from(Promise);

@Injectable({
  providedIn: 'root'
})
export class ColorCalculatorService {

  constructor() { }

  calculateComplementary(originalColor): Promise<string> {

    return new Promise<string>((resolve) => {
      const hslOriginalColor = chroma.color(originalColor).hsl();
      hslOriginalColor[0] = hslOriginalColor[0] + 180.0;
      resolve(chroma.color(hslOriginalColor, 'hsl').hex('rgb'));
    });
  }
    calculateMultipleLighterShades(numberOfShades, originalColor): Promise<Array<string>>{
      return new Promise<Array<string>>((resolve) => {
        const hslOriginalColor = chroma.color(originalColor);
        const lighterColors = [];
        for (let i = 0; i < numberOfShades; i++){
          const lighterColor = hslOriginalColor.brighter(i + 1 );
          lighterColors.push(chroma.color(lighterColor).hex('rgb'));
        }
        resolve(lighterColors);
      });
  }

}
