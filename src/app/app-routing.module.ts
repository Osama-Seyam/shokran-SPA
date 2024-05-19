import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { UsingComponent } from './using/using.component';


const routes: Routes = [
 { path : "using", component: UsingComponent},
 { path : "categories", component: CategoriesComponent},
 { path : "brands", component: BrandsComponent},
 { path : "contact", component: ContactComponent},
 { path: "about", component: AboutUsComponent},
 {path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
