import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { ContainerComponent } from './components/container/container.component';
import { EditorComponent } from './components/editor/editor.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: '', component: ContainerComponent, children: [
    {path: '', component: ListComponent, canActivate: [AdminGuard]},
    {path: 'new', component: EditorComponent, canActivate: [AdminGuard]},
    {path: ':id', component: EditorComponent, canActivate: [AdminGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
