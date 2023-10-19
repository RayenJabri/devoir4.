import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonsComponent } from './boissons/boissons.component';
import { AddBoissonComponent } from './add-boisson/add-boisson.component';
import { UpdateBoissonComponent } from './update-boisson/update-boisson.component';
const routes: Routes = [
  {path: "boissons",component : BoissonsComponent},
  {path: "add-boisson",component : AddBoissonComponent},
  { path: "", redirectTo: "boissons", pathMatch: "full" },
  {path: "updateBoisson/:id", component: UpdateBoissonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
