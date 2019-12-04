import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from '../categories/services/categories.service';

@Component({
  selector: 'add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddNewCategoryComponent implements OnInit {

  showAddCatForm: boolean = false;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  showAddNewCategoryForm() {

    this.showAddCatForm = true;

  }

  addNewCategory(categoryName: string) {
    
    if (categoryName == "") {

      alert("Please insert title for new category");

    } else {

      this.categoriesService.addNewCategoryWithNoChildren(categoryName);

      this.showAddCatForm = false;

    }

  }

}
