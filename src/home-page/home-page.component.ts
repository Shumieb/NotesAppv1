import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NotesListComponent } from '../notes-list/notes-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AddNoteComponent, NotesListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  router = inject(Router);

  ShowAddNewNoteForm() {
    this.router.navigateByUrl("/addNewNote");
  }
}
