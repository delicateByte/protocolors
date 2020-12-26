import { ColorObj } from './color-obj';

describe('ColorObj', () => {
  it('should create an instance', () => {
    expect(new ColorObj([255,255,255])).toBeTruthy();
  });
});
