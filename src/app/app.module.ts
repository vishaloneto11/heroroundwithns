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
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsService } from './services/productdetails.service';


const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'home', component: HerobinderComponent },
  { path: 'about', component: LetsdopipesComponent },
  { path: 'about/:id', component: UserComponent },
  { path: 'contact', component: DirectheroComponent },
  { path: 'Product', component: ProductComponent },
  { path: '**', redirectTo: "home" }

]


@NgModule({
  declarations: [
    AppComponent,
    HerobinderComponent,
    DirectheroComponent,
    LetsdopipesComponent,
    AgePipe,
    UserComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)



  ],
  providers: [EmployDetailsService, ProductdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
