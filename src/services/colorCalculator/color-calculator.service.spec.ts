import { TestBed } from '@angular/core/testing';
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
    return expect(service.calculateComplementary(originalColor)).toEqual('#824b40');
  });
  it('should return multiple lighter Shades', () => {
    originalColor = '#50ff61';
      expect(service.calculateMultipleLighterShades(5, originalColor)).toEqual([ '#8fff93', '#c8ffc6', '#fffffb', '#ffffff', '#ffffff' ]);
  });
  it('should return multiple darker Shades', () => {
    originalColor = '#50ff61';
      expect(service.calculateMultipleDarkerShades( 5, originalColor)).toEqual([ '#00ca2d', '#009800', '#006700', '#003a00', '#002000' ]);
  });
  it('should return shade of gray', () => {
    originalColor = '#50ff61';
    expect(service.calculateShadeOfGray(  originalColor)).toEqual( '#d9e2d8' );
  });
  it('should return white with a tint of the presented color', () => {
    originalColor = '#0bd620';
    expect(service.calculateWhiteWithTint(originalColor)).toEqual( '#ddfde0' );
  });
});
