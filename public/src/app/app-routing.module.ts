import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QaComponent } from './qa/qa.component';
import { AnswerComponent } from './qa/answer/answer.component';
import { CreateComponent } from './qa/create/create.component';
import { ListingComponent } from './qa/listing/listing.component';
import { ShowComponent } from './qa/show/show.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create', pathMatch: 'full', component: CreateComponent },
  { path: 'listing', pathMatch: 'prefix', component: ListingComponent},
  { path: 'answer', pathMatch: 'full', component: AnswerComponent },
  { path: 'answer/:id', pathMatch: 'full', component: AnswerComponent },
  { path: 'show', pathMatch: 'full', component: ShowComponent },
  { path: 'show/:id', pathMatch: 'full', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
