import { Component, Input } from '@angular/core';
import { EditNoteFormComponent } from '../edit-note-form/edit-note-form.component';
import { Note, Notes } from '../libs/noteInterface';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [EditNoteFormComponent],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent {
  foundNote?: Note = { id: "", title: "", description: "" };
  foundNoteId?: string = "";
  title?: string = "";
  created?: string = "";
  updated?: string = "";
  description?: string = "";

  editNote?: Note = { id: "", title: "", description: "" };

  @Input()
  set editId(editNoteId: string) {
    this.foundNote = Notes.find((note) => note.id == editNoteId);
    console.log(editNoteId, this.foundNote);
    this.title = this.foundNote?.title;
    this.created = this.foundNote?.created;
    this.updated = this.foundNote?.updated;
    this.description = this.foundNote?.description;
    this.foundNoteId = this.foundNote?.id;
  }
}
