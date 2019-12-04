import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/shared/app-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';
import { AddNewChildTaskComponent } from './components/add-new-child-task/add-new-child-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SelectedCategoryComponent,
    AddNewCategoryComponent,
    AddNewChildTaskComponent,
    
        
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
