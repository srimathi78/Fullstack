import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentEditComponent } from './student-edit/student-edit.component';



const routes: Routes = [
  {path:'Student', component:StudentComponent},
  {path: 'update/:id', component:StudentDeleteComponent},
  //{path: 'Add Student', component:StudentDeleteComponent},
  {path: '', redirectTo:'StudentDeleteComponent', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
