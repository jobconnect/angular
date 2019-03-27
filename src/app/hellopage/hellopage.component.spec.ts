import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellopageComponent } from './hellopage.component';

describe('HellopageComponent', () => {
  let component: HellopageComponent;
  let fixture: ComponentFixture<HellopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
