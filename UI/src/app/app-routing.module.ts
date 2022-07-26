import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch:'full'},
{path: 'new', component:NewComponent},
{path: 'view', component:ViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
