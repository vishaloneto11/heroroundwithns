import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerobinderComponent } from './herobinder/herobinder.component';
import { DirectheroComponent } from './directhero/directhero.component';

@NgModule({
  declarations: [
    AppComponent,
    HerobinderComponent,
    DirectheroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
