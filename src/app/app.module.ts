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

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    AddPipe,
    FilterComponent,
    HyphenPipe,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
