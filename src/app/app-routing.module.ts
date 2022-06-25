import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductTypeComponent } from './add-product-type/add-product-type.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'home', component : AppComponent },
  {path: 'product', component : AddProductComponent },
  {path: 'productType', component : AddProductTypeComponent },
  {path: 'updateproduct', component : UpdateProductComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
