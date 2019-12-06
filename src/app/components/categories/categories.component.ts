import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { Category } from './models/Category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category> = new Array<Category>();
  selectedCategory: Category;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {

    this.highlightSelectedCategoryIfAny();
    this.getCategories();

  }

  highlightSelectedCategoryIfAny(): any {

    //we are setting the selected category on every route change 
    this.categoriesService.selectedCategoryAsObservable.subscribe((selectedCategory: Category) => {

      if (selectedCategory) {

        this.selectedCategory = selectedCategory;

        this.categories.map((cat) => {

          if (this.selectedCategory.id == cat.id) {

            cat.isSelected = true;

          } else {

            cat.isSelected = false;

          }

          return cat;

        })

      }

    });

  }

  getCategories(): any {

    this.categories = this.categoriesService.getCategories();

  }

}
