import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoryId: string;
  searchTitleDescription: string;
  color = '';

  constructor() { }

  ngOnInit(): void { }

  receiveCategory(categId: string) {
    this.categoryId = categId;
  }

  receiveSearch(searchTitleDescription: string) {
    this.searchTitleDescription = searchTitleDescription;
    this.categoryId = '';
  }
}
