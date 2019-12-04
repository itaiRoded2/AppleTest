import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewChildTaskComponent } from './add-new-child-task.component';

describe('AddNewChildTaskComponent', () => {
  let component: AddNewChildTaskComponent;
  let fixture: ComponentFixture<AddNewChildTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewChildTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewChildTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
