import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './../services/note.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  
  private categoryId:string="";

  notes: Note[];
  title:string ="";
  description:string="";

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.noteService.serviceCall();
    this.notes = this.noteService.getNotes();
  }

  showNote(note: any) {
    this.router.navigate(['addNote'], {
      queryParams: { title: note.title, description: note.description },
    });
  }
  

}
