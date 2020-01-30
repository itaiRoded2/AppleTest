import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Category } from './../categories/models/Category';
import { CategoriesService } from '../categories/services/categories.service';

@Component({
  selector: 'add-new-child-task',
  templateUrl: './add-new-child-task.component.html',
  styleUrls: ['./add-new-child-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddNewChildTaskComponent implements OnInit {

  shouldShowAddTaskBtn = false;
  shouldShowNewTaskForm: boolean = false;
    
  @Input()
  selectedCategory: Category = null;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {

  }

  ngOnChanges(inputPropertiesChanges: SimpleChanges): void {

    if (inputPropertiesChanges && inputPropertiesChanges.selectedCategory && inputPropertiesChanges.selectedCategory.currentValue != null) {

      this.shouldShowAddTaskBtn = true;

    }

}

  showNewTaskForm() {

    this.shouldShowNewTaskForm = true;
    this.shouldShowAddTaskBtn = false;

  }

  addNewTask(newTaskTitle: string) {

    if (newTaskTitle == "") {

      alert("Please enter a task title!");

    } else {

      let newCategoryWithNewTaskChild: Category = this.categoriesService.addNewTaskForCategory(this.selectedCategory, newTaskTitle);
      this.shouldShowNewTaskForm = false;
      this.shouldShowAddTaskBtn = true;      

    }

  }

}
