import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../categories/services/categories.service';
import { Category } from './../categories/models/Category';
import { CategoryChild } from '../categories/models/CategoryChild';

@Component({
  selector: 'selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent implements OnInit, OnDestroy {

  id: string;
  selectedCatName: string;
  selectedCat: Category;
  children: Array<CategoryChild> = new Array<CategoryChild>();

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {

    debugger;
    this.route.params.subscribe((params: Params) => {

      this.setCategoryById();

    });

    //When adding a new task to newly created category 
    this.categoriesService.selectedCategoryAsObservable.subscribe((selectedCategory: Category) => {
      
      debugger;
      if(selectedCategory) {   

          this.selectedCatName = this.selectedCat.name;
          this.children = this.selectedCat.children;

      }

    });

  }

  setCategoryById(): any {

    const idFromRoute = +this.route.snapshot.paramMap.get('id');

    this.id = idFromRoute.toString();

    this.selectedCat = this.categoriesService.getCatById(this.id);

    if (this.selectedCat) {

      this.selectedCatName = this.selectedCat.name;
      this.children = this.selectedCat.children;

      this.categoriesService.setSelectedCategory(this.selectedCat);
      
    } else {

      this.selectedCatName = "No category matched for this id";

    }
  }


  toggleChildCat(childCat: CategoryChild): void {

    
    this.categoriesService.toggleCatChildIsDeleted(this.selectedCat, childCat.id);
  }

  deleteChildCat(childCat: CategoryChild): void {
    
    this.categoriesService.deleteChildCategory(this.selectedCat, childCat);

  }

  isChecked(childCat: CategoryChild): boolean {

    let retVal = false;

    if (childCat.isDeleted) {

      retVal = true;

    }

    return retVal;

  }

  checkedIfCrossed(childCat: CategoryChild): string {

    let className = "";

    if(childCat.isDeleted) {

      className = "shouldBeCrossed";
    }

    return className;
  }

  ngOnDestroy(): void {


  }

}
