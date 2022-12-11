import { PostComponent } from './posts/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { ResumeBlogComponent } from './resume-blog/resume-blog.component';
import { DernierBlogComponent } from './dernier-blog/dernier-blog.component';
import { ChangementComponent } from './changement/changement.component';
import { FinalisationComponent } from './finalisation/finalisation.component';
import { CompletComponent } from './complet/complet.component';

const routes: Routes = [

  { path : 'detail', component : PostComponent },

  { path : '', component:AdministrationComponent },

  { path : 'detail1', component : ResumeBlogComponent },

  { path : '', component:PostComponent },

  { path : 'detail2', component : DernierBlogComponent },

  { path : '', component:ResumeBlogComponent },

  { path : 'detail3', component : ResumeBlogComponent },

  { path : '', component:DernierBlogComponent },
  {path:'administration' , component:AdministrationComponent},

  { path : 'detail5/:id', component : ChangementComponent },

  { path : '', component:AdministrationComponent },

  { path : 'detail6', component : PostComponent },

  { path : '', component:AdministrationComponent },

  { path : 'detail7', component : FinalisationComponent },

  { path : '', component:AdministrationComponent },

  { path : 'detail8/:id', component : CompletComponent },

  { path : '', component:FinalisationComponent },





 ];




@NgModule({
  declarations: [],
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
