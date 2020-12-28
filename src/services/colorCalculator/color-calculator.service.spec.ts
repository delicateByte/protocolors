import { TestBed } from '@angular/core/testing';
import { ColorObj} from '../../classes/ColorObj/color-obj';
import { ColorCalculatorService } from './color-calculator.service';

describe('ColorCalculatorService', () => {
  let service: ColorCalculatorService;
  let originalColor = '#00000';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   // TODO: OFF BY ONE Rounding Error
  it('should return complementary Color', () => {
    originalColor = '#407782';
    return service.calculateComplementary(originalColor).then((result) => {
      expect(result).toEqual('#824b40');
    });
  });
  it('should return multiple lighter Shades', () => {
    originalColor = '#50ff61';
    return service.calculateMultipleLighterShades(5, originalColor).then((result) => {
      expect(result).toEqual([ '#8fff93', '#c8ffc6', '#fffffb', '#ffffff', '#ffffff' ]);
    });
  });
});
