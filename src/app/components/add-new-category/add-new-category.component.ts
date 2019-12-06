import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from '../categories/services/categories.service';
import { Category } from '../categories/models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddNewCategoryComponent implements OnInit {

  showAddCatForm: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
    
  }
    

  showAddNewCategoryForm() {

    this.showAddCatForm = true;

  }

  addNewCategory(categoryName: string) {
    
    if (categoryName == "") {

      alert("Please insert title for new category");

    } else {

      let newlyAddedCategory: Category = this.categoriesService.addNewCategoryWithNoChildren(categoryName);

      this.showAddCatForm = false;

      this.router.navigateByUrl('/detail/' + newlyAddedCategory.id);
      
    }

  }

}
