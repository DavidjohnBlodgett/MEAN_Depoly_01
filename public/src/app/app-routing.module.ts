import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'new_question', pathMatch: 'full', component: NewQuestionComponent },
    { path: 'lets_play', pathMatch: 'full', component: LetsPlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
