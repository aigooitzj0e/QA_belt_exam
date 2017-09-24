import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QaComponent } from './qa/qa.component';
import { ListingComponent } from './qa/listing/listing.component';
import { CreateComponent } from './qa/create/create.component';
import { ShowComponent } from './qa/show/show.component';
import { AnswerComponent } from './qa/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QaComponent,
    ListingComponent,
    CreateComponent,
    ShowComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
