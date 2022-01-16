import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testycomponet2Component } from './testycomponet2.component';

describe('Testycomponet2Component', () => {
  let component: Testycomponet2Component;
  let fixture: ComponentFixture<Testycomponet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testycomponet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testycomponet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
