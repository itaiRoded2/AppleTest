import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedCategoryComponent } from 'src/app/components/selected-category/selected-category.component';

const routes: Routes = [

    { path: 'detail/:id', component: SelectedCategoryComponent, runGuardsAndResolvers: "always" },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {                        
        })
    ],    
    exports: [RouterModule]
})
export class AppRoutingModule { }
