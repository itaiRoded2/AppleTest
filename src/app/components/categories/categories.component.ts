import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { Category } from './models/Category';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
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
    
    //set selected category on every route change 
    this.categoriesService.selectedCategoryAsObservable.subscribe((selectedCategory: Category) => {

      if(selectedCategory) {

        this.selectedCategory = selectedCategory;
      }

    });

  }


  getCategories(): any {
    
    this.categories = this.categoriesService.getCategories();

  }  

  shouldAddHighlightedClass(category: Category) : string {

    let retVal : string = "";

    if (this.selectedCategory) {

      if(this.selectedCategory.id == category.id) {
    
        retVal = "highlightMe";

      }

    }

    return retVal;

  }

}
