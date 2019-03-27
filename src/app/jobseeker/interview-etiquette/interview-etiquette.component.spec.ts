import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewEtiquetteComponent } from './interview-etiquette.component';

describe('InterviewEtiquetteComponent', () => {
  let component: InterviewEtiquetteComponent;
  let fixture: ComponentFixture<InterviewEtiquetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewEtiquetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
