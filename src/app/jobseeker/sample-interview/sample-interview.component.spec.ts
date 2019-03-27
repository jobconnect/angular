import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleInterviewComponent } from './sample-interview.component';

describe('SampleInterviewComponent', () => {
  let component: SampleInterviewComponent;
  let fixture: ComponentFixture<SampleInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
