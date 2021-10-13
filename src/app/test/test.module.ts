import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test2Module } from './test2.module';

@NgModule({
  declarations: [Test1Component, Test2Component],
  imports: [CommonModule, Test2Module],
  exports: [Test1Component, Test2Component],
})
export class TestModule {}
