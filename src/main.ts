import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { AddNewNoteComponent } from './add-new-note/add-new-note.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "contact", component: AboutPageComponent },
  { path: "noteDetail/:id", component: NotesDetailsComponent },
  { path: "addNewNote", component: AddNewNoteComponent }
]


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())],
})
  .catch((err) => console.error(err));
