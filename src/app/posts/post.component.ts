import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { Post } from './post';

@Component({

  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postForm:any;
  authors:any[];
  post:Post=new Post();
  error_message : string ='';



  constructor(private apiService: ApiService,private router: Router,private formBuilder: FormBuilder,private navigation : Router) {


   }

  ngOnInit(): void {
     this.initForm();
    this.getAuthorList();
  }

  redirect1(){
    this.router.navigateByUrl('detail1');
   }

   createPost(){

      
     console.log(this.post);
     this.apiService.createPost(this.post);
     this.navigation.navigateByUrl('administration');



   }




   getAuthorList(){
    this.apiService.getAuthors().subscribe((data:[])=>{
      console.log(data);
      this.authors = data ;

  });

   }

   onChange(event:any){


   }

   initForm(){
     this.postForm = this.formBuilder.group(
      {title:"",resume:"",content:"",image_url:"",author_id:""}
     )

   }

}
