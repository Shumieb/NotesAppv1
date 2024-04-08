import { Component, Input } from '@angular/core';
import { Note, Notes } from '../libs/noteInterface';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-note-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-note-form.component.html',
  styleUrl: './edit-note-form.component.css'
})
export class EditNoteFormComponent {
  editTitle?: string = "";
  editCreated?: string = "";
  editUpdated?: string = "";
  editDescription?: string = "";
  noteToEditId?: string = "";

  @Input() noteToEdit?: Note = { id: "", title: "", description: "" };

  editForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl("")
  })

  ngOnInit() {
    this.editCreated = this.noteToEdit?.created;
    this.editUpdated = this.noteToEdit?.updated;
    this.editTitle = this.noteToEdit?.title;
    this.editDescription = this.noteToEdit?.description;
    this.noteToEditId = this.noteToEdit?.id;

    this.editForm.controls["title"].setValue(this.editTitle ? this.editTitle : null);
    this.editForm.controls["description"].setValue(this.editDescription ? this.editDescription : null);
  }

}
