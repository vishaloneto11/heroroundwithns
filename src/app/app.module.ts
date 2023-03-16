import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HerobinderComponent } from './herobinder/herobinder.component';
import { DirectheroComponent } from './directhero/directhero.component';
import { LetsdopipesComponent } from './letsdopipes/letsdopipes.component';
import { AgePipe } from './letsdopipes/age.pipe';
import { EmployDetailsService } from './services/employ-details.service';
@NgModule({
  declarations: [
    AppComponent,
    HerobinderComponent,
    DirectheroComponent,
    LetsdopipesComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule



  ],
  providers: [EmployDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
