import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', component: B
  // },
  // {
  //   path: 'create', component: CreateComponent
  // },
  // {
  //   path: 'edit/:id', component: EditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
