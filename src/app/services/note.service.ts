import { Injectable } from '@angular/core';
import { Note } from '../note/note';

@Injectable()
export class NoteService {
  notes: Note[] = [
    {
      id: 'Id1',
      title: 'First note',
      description: 'This is the description for the first note',
      categoryId:"1",
    },
    {
      id: 'Id2',
      title: 'Second note',
      description: 'This is the description for the second note',
      categoryId:"2",
       },
    {
      id: 'Id3',
      title: 'Third note',
      description: 'This is the description for the third note',
      categoryId:"4",
    },
  ];
  constructor() {}
  serviceCall() {
    console.log('SERVICE!');
  }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(id:string, title:string, description:string, categoryId:string): void
  {
     this.notes.push({id:id, title:title, description:description, categoryId:categoryId})

  }
}
