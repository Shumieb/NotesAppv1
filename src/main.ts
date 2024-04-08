import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  { path: "", component: AppComponent },
]


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
