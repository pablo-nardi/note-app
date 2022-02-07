import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainNoteComponent} from './main-note/main-note.component';
import {NoteListComponent} from './note-list/note-list.component';

const routes: Routes = [
  {path:'mainnote', component: MainNoteComponent},
  {path:'notelist', component: NoteListComponent},
  {path:'**', component: MainNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
