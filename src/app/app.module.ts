import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Service } from './service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: "", redirectTo: "/home", pathMatch: "full",  },
        { path: "home", component: HomeComponent },
      ],
      { useHash: true }
    ),
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
