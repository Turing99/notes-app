import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterCategoriesService } from '../services/filter-categories.service';
import { NoteService } from '../services/note.service';
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
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private filterCategoriesService: FilterCategoriesService,
  ) {}

  ngOnInit(): void {
    //  this.notes = this.noteService.getNotes();
    this.categories = this.filterCategoriesService.getCategories();
  }

  // ngOnInit(): void {
  //   this._activatedRoute.queryParams.subscribe((params) => {
  //     this.title = params['title'];
  //     this.description = params['description'];
  //   });
  // }

  addNewNote() {
    console.log(this.categoryId);
    this.noteService.addNote(this.title, this.description, this.categoryId);
    this.router.navigateByUrl('');
  }
}
