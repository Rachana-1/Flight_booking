import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashComponent } from './new-dash.component';

describe('NewDashComponent', () => {
  let component: NewDashComponent;
  let fixture: ComponentFixture<NewDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
