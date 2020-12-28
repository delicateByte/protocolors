import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputColorComponent } from './output-color.component';

describe('OutputColorComponent', () => {
  let component: OutputColorComponent;
  let fixture: ComponentFixture<OutputColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
