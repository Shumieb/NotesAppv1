import { Component } from '@angular/core';
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

}
