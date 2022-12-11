import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Post } from '../posts/post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changement',
  templateUrl: './changement.component.html',
  styleUrls: ['./changement.component.css'],
})
export class ChangementComponent implements OnInit {
  postForm: any;
  authors: any[];
  post: Post = new Post();
  id: number = 0;
  error_message : string ='';

  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private navigation : Router
  ) {}

  ngOnInit(): void {
    // this.initForm();
    this.getAuthorList();
    this.id = this.router.snapshot.params['id'];
    this.apiService.getPost(this.id).subscribe((data) => {
      this.post = data;
    });
  }

  getAuthorList() {
    this.apiService.getAuthors().subscribe((data: []) => {
      //console.log(data);
      this.authors = data;
    });
  }

  onChange(event: any) {}

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      resume: '',
      content: '',
      image_url: '',
      author_id: '',
    });
  }

  modifpost() {
    console.log(this.post);
    this.http
      .put<Post>(
        'http://102046.bloggy.ecole-it.devigne.space/posts/' + this.id,
        JSON.stringify(this.post)
        //JSON.stringify({})  pour le test du code erreur on dsactive les commentaire apres revenri a lq normql on reqctive
      )
      .subscribe((data) => {
        this.post = data;
        console.log(this.post);
        this.navigation.navigateByUrl('administration');

      },

      error => {
        console.log("error",error);
        const status :number = error.status;
        switch(status){

          case 400:
            this.error_message = 'formilaire incomplet erreur 404';
           setTimeout(()=>{
            this.error_message = '';
           },2000)
            break
          case 404 :
            this.error_message = 'post non trouve erreur 404';
            break
          //setime out est le temps pour reinitialiser la variable error message apres 2000ms = 2s et dans le fichier html on a "error_message.length > 0"





        }


      }

      );




    }




  }
