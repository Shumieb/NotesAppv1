import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "contact", component: AboutPageComponent },
  { path: "noteDetail/:id", component: NotesDetailsComponent }
]


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
  .catch((err) => console.error(err));
