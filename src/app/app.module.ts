import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { PostComponent } from './posts/post.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeBlogComponent } from './resume-blog/resume-blog.component';
import { DernierBlogComponent } from './dernier-blog/dernier-blog.component';
import  { HttpClientModule } from'@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ChangementComponent } from './changement/changement.component';
import { FinalisationComponent } from './finalisation/finalisation.component';
import { CompletComponent } from './complet/complet.component';





@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    PostComponent,
    ResumeBlogComponent,
    DernierBlogComponent,
    ChangementComponent,
    FinalisationComponent,
    CompletComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
