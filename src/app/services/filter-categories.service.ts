import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class FilterCategoriesServices {
  categories: Category[] = [
    {
      id: '1',
      name: 'To DO',
    },
    {
      id: '2',
      name: 'Done',
    },
    {
      id: '3',
      name: 'Doing',
    },
  ];
  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }
}
