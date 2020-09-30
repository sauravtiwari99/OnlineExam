import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLevel1Component } from './test-level1.component';

describe('TestLevel1Component', () => {
  let component: TestLevel1Component;
  let fixture: ComponentFixture<TestLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
