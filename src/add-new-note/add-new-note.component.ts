import { Component } from '@angular/core';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-add-new-note',
  standalone: true,
  imports: [AddNoteComponent],
  templateUrl: './add-new-note.component.html',
  styleUrl: './add-new-note.component.css'
})
export class AddNewNoteComponent {

}
