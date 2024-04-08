import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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

  visitDetailsPage() {
    this.router.navigateByUrl(`/noteDetail/${this.slug}`);
  }

}
