import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryChild } from '../models/CategoryChild';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private selectedCategory = new BehaviorSubject<Category>(null);

  selectedCategoryAsObservable = this.selectedCategory.asObservable();

  categories: Array<Category>;

  constructor() {

    this.setDefaults();

  }


  setDefaults() {

    this.categories = new Array<Category>();

    let category1 = new Category(1, "Category 1 title", null);
    category1.children = this.getFakeCatChildren();

    let category2 = new Category(2, "Category 2 title", null);
    category2.children = this.getFakeCatChildren();

    let category3 = new Category(3, "Category 3 title", null);
    category3.children = this.getFakeCatChildren();

    this.categories.push(category1);
    this.categories.push(category2);
    this.categories.push(category3);

  }

  getFakeCatChildren(): CategoryChild[] {

    let retVal: Array<CategoryChild> = new Array<CategoryChild>();

    for (var i = 0; i < 9; i++) {

      let tempTitle: string = "Child category " + i;
      let tempIsDeleted = (i % 2 == 0 ? true : false);

      let temp: CategoryChild = new CategoryChild(i, tempTitle, tempIsDeleted);

      retVal.push(temp);

    }

    return retVal;
  }

  getCategories(): Array<Category> {

    return this.categories;

  }

  getCatById(id: string): Category {

    let matchedCat: Category = this.categories.find(cat => cat.id.toString() == id);

    if (matchedCat) {

      return matchedCat;

    } else {

      return null;

    }

  }

  toggleCatChildIsDeleted(category: Category, childId: any) {

    let matchedCatChild: CategoryChild = category.children.find(catChild => catChild.id.toString() == childId);

    if (matchedCatChild) {

      matchedCatChild.isDeleted = !matchedCatChild.isDeleted;

    }

  }

  deleteChildCategory(selectedCat: Category, childCat: CategoryChild): void {

    const index = selectedCat.children.indexOf(childCat, 0);

    if (index > -1) {
      selectedCat.children.splice(index, 1);
    }

  }

  addNewCategoryWithNoChildren(categoryName: string): Category {

    let newCategoryId: number = this.categories.length + 1;

    let newCategory = new Category(newCategoryId, categoryName, null);

    this.categories.push(newCategory);

    return newCategory;

  }


  setSelectedCategory(selectedCategory: Category) {

    this.selectedCategory.next(selectedCategory);

  }

  addNewTaskForCategory(selectedCategory: Category, newTaskTitle: string) : Category {
    
    let newCategoryChildTaskId: number = 1;

    if(selectedCategory && selectedCategory.children && selectedCategory.children.length)  {

      newCategoryChildTaskId = selectedCategory.children.length + 1;
    
    } else {
      
      selectedCategory.children = new Array<CategoryChild>();

    }
     
    let newCategoryChildTask: CategoryChild = new CategoryChild(newCategoryChildTaskId, newTaskTitle, false);

    selectedCategory.children.push(newCategoryChildTask);

    return selectedCategory;

  }

}
