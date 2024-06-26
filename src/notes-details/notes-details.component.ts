import { Component, Input, inject } from '@angular/core';
import { Note, Notes } from '../libs/noteInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-details',
  standalone: true,
  imports: [],
  templateUrl: './notes-details.component.html',
  styleUrl: './notes-details.component.css'
})

export class NotesDetailsComponent {
  router = inject(Router);

  currentNote?: Note = { id: "", title: "", description: "" };
  currentNoteId?: string = "";
  title?: string = "";
  created?: string = "";
  updated?: string = "";
  description?: string = "";


  @Input()
  set id(noteId: string) {
    //console.log(noteId);
    this.currentNote = Notes.find((note) => note.id == noteId);
    this.title = this.currentNote?.title;
    this.created = this.currentNote?.created;
    this.updated = this.currentNote?.updated;
    this.description = this.currentNote?.description;
    this.currentNoteId = this.currentNote?.id;
    //console.log(this.currentNote?.title);
  }

  editNote() {
    this.router.navigateByUrl(`/editNote/${this.currentNoteId}`);
  }

  deleteNote() {
    console.log(this.currentNoteId);
  }
}
