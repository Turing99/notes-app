import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test4ComponentComponent } from './test4-component/test4-component.component';
@NgModule({
  declarations: [Test4ComponentComponent],
  imports: [CommonModule],

  exports: [Test4ComponentComponent],
})
export class Test4Module {}
