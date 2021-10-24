import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { FilterCategoriesServices } from './../services/filter-categories.service';
import { Category } from './../models/category';
import { Note } from './../note/note';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  title: string = '';
  description: string = '';
  categoryId: string;
  categories: Category[];
  notes: Note[];


  constructor(
    private _activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private filter_categories: FilterCategoriesServices,
  ) {}

  ngOnInit(): void{
     this.notes = this.noteService.getNotes();
     this.categories =this.filter_categories.getCategories();
  }

  // ngOnInit(): void {
  //   this._activatedRoute.queryParams.subscribe((params) => {
  //     this.title = params['title'];
  //     this.description = params['description'];
  //   });
  // }

  addNewNote()
  {
    console.log(this.categoryId);
     this.noteService.addNote(this.title, this.description, this.categoryId);
    }

  }
