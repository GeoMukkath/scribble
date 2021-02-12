import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { EditorComponent } from './components/editor/editor.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: '', component: ContainerComponent, children: [
    {path: '', component: ListComponent},
    {path: 'new', component: EditorComponent},
    {path: ':id', component: EditorComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
