import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidInterviewComponent } from './void-interview.component';

describe('VoidInterviewComponent', () => {
  let component: VoidInterviewComponent;
  let fixture: ComponentFixture<VoidInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoidInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
