import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './_services/users.service';
import { QuestionsService } from './_services/questions.service';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewQuestionComponent,
    LetsPlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
