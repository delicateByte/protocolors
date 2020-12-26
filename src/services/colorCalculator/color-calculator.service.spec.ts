import { TestBed } from '@angular/core/testing';
import { ColorObj} from '../../classes/ColorObj/color-obj';
import { ColorCalculatorService } from './color-calculator.service';

describe('ColorCalculatorService', () => {
  let service: ColorCalculatorService;
  const originalColor = new ColorObj([254, 0, 0]);
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return complementary Color', () => {
    return service.calculateComplementary(originalColor).then((result) => {
      expect(result.rgb).toEqual([1, 255, 255]);
    });
  });
});
