import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note/note';

@Injectable()
export class NoteService {

  notes: Note[] = [
    {
      id: 'Id1',
      title: 'First note',
      description: 'This is the description for the first note',
      categoryId: '1',
    },
    {
      id: 'Id2',
      title: 'Second note',
      description: 'This is the description for the second note',
      categoryId: '2',
    },
    {
      id: 'Id3',
      title: 'Third note',
      description: 'This is the description for the third note',
      categoryId: '3',
    },
  ];


  constructor(private router: Router) { }
  serviceCall() {
    console.log('SERVICE!');
  }

  getNotes(): Note[] {
    return this.notes;
  }

  getFiltredNotes(categoryId: string) {
    return this.notes.filter((note) => note.categoryId === categoryId);
  }

  addNote(title: string, description: string, categoryId: string): void {

    let newNote = {
      id: 'Id' + String(this.notes.length + 1),
      title: title,
      description: description,
      categoryId: categoryId,
    };
    this.notes.push(newNote);
    this.router.navigateByUrl('');
    console.log(this.notes);
  }

  getSearchedNotes(selectedInputSearch: string): Note[] {
    return this.notes.filter(note => note.title.toLocaleLowerCase().includes(selectedInputSearch.toLocaleLowerCase()) ||
      note.description.toLocaleLowerCase().includes(selectedInputSearch.toLocaleLowerCase()));
  }
}
