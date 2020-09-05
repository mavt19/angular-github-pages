import { ListEmployeeComponentComponent } from './components/list-employee-component/list-employee-component.component';
import { AddEmployeeComponentComponent } from './components/add-employee-component/add-employee-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'add-employee', component: AddEmployeeComponentComponent },
  { path: 'list-employee', component: ListEmployeeComponentComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list-employee' },
  { path: '**', pathMatch: 'full', redirectTo: 'list-employee' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
