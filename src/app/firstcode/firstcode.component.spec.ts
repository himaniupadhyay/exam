import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcodeComponent } from './firstcode.component';

describe('FirstcodeComponent', () => {
  let component: FirstcodeComponent;
  let fixture: ComponentFixture<FirstcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
