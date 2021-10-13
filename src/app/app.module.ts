import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestModule } from './test/test.module';
import { Test2Module } from './test/test2.module';
import { Test3Module } from './test/test3.module';
import { Test4Module } from './test/test4.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule,
    Test2Module,
    Test3Module,
    Test4Module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
