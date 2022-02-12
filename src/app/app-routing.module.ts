import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainNoteComponent} from './main-note/main-note.component';
import {NoteListComponent} from './note-list/note-list.component';
import {MainAppComponent} from './main-app/main-app.component'


const routes: Routes = [
  {path: 'noteapp', component: MainAppComponent},
  {path:'mainnote', component: MainNoteComponent},
  {path:'notelist', component: NoteListComponent},
  {path:'**', component: MainAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
