import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { LinguagemComponent } from './linguagem/linguagem.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { LinguagemItemComponent } from './linguagem/linguagem-item/linguagem-item.component';
import { LinguagemInputComponent } from './linguagem/linguagem-input/linguagem-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LinguagemComponent,
    LinguagemItemComponent,
    LinguagemInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
