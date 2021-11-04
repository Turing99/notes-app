import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note/note';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable()
export class NoteService {

  readonly baseUrl = "https://localhost:44391";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private router: Router, private httpClient: HttpClient) { }
  serviceCall() {
    console.log('SERVICE!');
  }

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.baseUrl + '/notes', this.httpOptions);
  }

  getFiltredNotes(categoryId: string) {
    return this.httpClient.get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(map((notes) => notes.filter((note) => note.categoryId === categoryId)));

    // return this.notes.filter((note) => note.categoryId === categoryId);
  }

  // addNote(title: string, description: string, categoryId: string): void {
  //   let newNote = {
  //     id: 'Id' + String(this.notes.length + 1),
  //     title: title,
  //     description: description,
  //     categoryId: categoryId,
  //   };
  //   this.notes.push(newNote);
  //   this.router.navigateByUrl('');
  //   console.log(this.notes);
  // }

  addNote(noteTitle: string, noteDescription: string, noteCategoryId: string): Observable<Note[]> {
    let note = {
      description: noteDescription,
      title: noteTitle,
      categoryId: noteCategoryId
    }
    return this.httpClient.post<Note[]>(this.baseUrl + "/notes", note);
  }

  deleteNote(id: string) {
    return this.httpClient.delete(this.baseUrl + '/notes/' + id);
  }

  getSearchedNotes(selectedInputSearch: string): Observable<Note[]> {
    // return this.notes.filter(note => note.title.toLocaleLowerCase().includes(selectedInputSearch.toLocaleLowerCase()) ||
    //   note.description.toLocaleLowerCase().includes(selectedInputSearch.toLocaleLowerCase()));

    return this.httpClient.get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(map((notes) => notes.filter((note) => note.title.toLocaleLowerCase().includes(selectedInputSearch.toLocaleLowerCase()) ||
        note.description.toLocaleLowerCase().includes(selectedInputSearch.toLocaleLowerCase()))));


  }
}
