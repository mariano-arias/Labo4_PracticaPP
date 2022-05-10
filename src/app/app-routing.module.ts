import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './pages/foro/foro.component';

const routes: Routes = [
  {
    path: 'foro', redirectTo: "foro"
  },
  {
    path: 'foro', component: ForoComponent,
  }
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
