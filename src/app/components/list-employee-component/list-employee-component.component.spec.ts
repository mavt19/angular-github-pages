import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeComponentComponent } from './list-employee-component.component';

describe('ListEmployeeComponentComponent', () => {
  let component: ListEmployeeComponentComponent;
  let fixture: ComponentFixture<ListEmployeeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
