import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestycomponetComponent } from './testycomponet.component';

describe('TestycomponetComponent', () => {
  let component: TestycomponetComponent;
  let fixture: ComponentFixture<TestycomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestycomponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestycomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
