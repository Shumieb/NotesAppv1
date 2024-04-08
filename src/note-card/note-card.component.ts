import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../libs/noteInterface';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})

export class NoteCardComponent {
  router = inject(Router);
  slug = "one";
  @Input() note: Note = { id: "", title: "", description: "" };

  constructor() {
    //console.log(this.note);
  }

  visitDetailsPage() {
    this.router.navigateByUrl(`/noteDetail/${this.note.id}`);
  }
}
