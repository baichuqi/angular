import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        // loadChildren: () => console.log("")
        redirectTo: 'list'
      },
      // {
      //   path: 'login',
      //   pathMatch: 'full',
      //   // loadChildren: () => import('')
      // },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
