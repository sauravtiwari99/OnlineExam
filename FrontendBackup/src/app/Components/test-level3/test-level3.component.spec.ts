import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLevel3Component } from './test-level3.component';

describe('TestLevel3Component', () => {
  let component: TestLevel3Component;
  let fixture: ComponentFixture<TestLevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
