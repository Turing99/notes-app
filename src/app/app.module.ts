import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AddPipe } from './add.pipe';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from '@angular/material/card';
import { HyphenPipe } from './hyphen.pipe';
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { NoteService } from './services/note.service';
import { ShowParameterComponent } from './show-parameter/show-parameter.component';
import { MatSelectModule } from '@angular/material/select';
import { FilterCategoriesServices } from './services/filter-categories.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    AddPipe,
    FilterComponent,
    HyphenPipe,
    AddNoteComponent,
    HomeComponent,
    ShowParameterComponent,
    SearchComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [NoteService, FilterCategoriesServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
