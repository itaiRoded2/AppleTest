import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category } from './../categories/models/Category';
import { CategoriesService } from '../categories/services/categories.service';

@Component({
  selector: 'add-new-child-task',
  templateUrl: './add-new-child-task.component.html',
  styleUrls: ['./add-new-child-task.component.css']
})
export class AddNewChildTaskComponent implements OnInit {

  shouldShowAddTaskBtn = false;
  shouldShowNewTaskForm: boolean = false;
  selectedCategory: Category = null;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {

    //set selected category on every route change 
    this.categoriesService.selectedCategoryAsObservable.subscribe((selectedCategory: Category) => {

      if (selectedCategory) {

        this.selectedCategory = selectedCategory;
        this.shouldShowAddTaskBtn = true;

      }

    });

  }

  showNewTaskForm() {

    this.shouldShowNewTaskForm = true;
    this.shouldShowAddTaskBtn = false;

  }

  addNewTask(newTaskTitle: string) {

    if (newTaskTitle == "") {

      alert("Please enter a task title!");

    } else {

      let newCategoryWithChildTask: Category = this.categoriesService.addNewTaskForCategory(this.selectedCategory, newTaskTitle);
      this.shouldShowNewTaskForm = false;
      this.shouldShowAddTaskBtn = true;

      debugger;


      this.categoriesService.setSelectedCategory(newCategoryWithChildTask);

    }

  }

}
