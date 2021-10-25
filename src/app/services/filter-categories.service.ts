import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class FilterCategoriesService {
  categories: Category[] = [
    {
      id: '1',
      name: 'ToDO',
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
