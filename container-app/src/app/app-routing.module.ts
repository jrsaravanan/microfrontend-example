import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details-app.component';



const routes: Routes = [

  { path:'details',  component:  DetailsComponent },
  { path: 'form', component: FormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
