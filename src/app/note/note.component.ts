import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './../services/note.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  private categoryId: string = '';

  notes: Note[];
  title: string = '';
  description: string = '';

  @Input() selectedCategoryId: string;

  @Input() selectedInputSearch: string;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.noteService.serviceCall();
    // this.notes = this.noteService.getNotes();

    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    })
  }

  ngOnChanges() {
    if (this.selectedCategoryId) {
      // this.notes = this.noteService.getFiltredNotes(this.selectedCategoryId);

      this.noteService.getFiltredNotes(this.selectedCategoryId).subscribe((result) => {
        this.notes = result;
      })
    }

    if (this.selectedInputSearch) {
      // this.notes = this.noteService.getSearchedNotes(this.selectedInputSearch);
      this.noteService.getSearchedNotes(this.selectedInputSearch).subscribe((result) => {
        this.notes = result;
      })

    }
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id);
    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    })
  }

  showNote(note: any) {
    this.router.navigate(['addNote'], {
      queryParams: { title: note.title, description: note.description },
    });
  }
}
