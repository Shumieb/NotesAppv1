import { Component } from '@angular/core';
import { Note } from '../libs/noteInterface';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  newNote: Note = { id: "", title: "", description: "" };


}
