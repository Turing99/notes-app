import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test4ComponentComponent } from './test4-component.component';

describe('Test4ComponentComponent', () => {
  let component: Test4ComponentComponent;
  let fixture: ComponentFixture<Test4ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test4ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
