import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { SelectedCategoryComponent } from 'src/app/components/selected-category/selected-category.component';

const routes: Routes = [

    { path: 'detail/:id', component: SelectedCategoryComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            //preloadingStrategy: CustomPreloadingService,
            //preloadingStrategy: NoPreloading, //WIll not pre load any modules and they will be downloaded when user navigate to the route 
            //useHash: false,
            //onSameUrlNavigation: 'reload'
        })
    ],
    //imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })], //THE DEFAULT 
    exports: [RouterModule]
})
export class AppRoutingModule { }
