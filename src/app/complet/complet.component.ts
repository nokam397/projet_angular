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
  selector: 'app-complet',
  templateUrl: './complet.component.html',
  styleUrls: ['./complet.component.css']
})
export class CompletComponent implements OnInit {

  post: Post = new Post();
  id: number = 0;


  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private navigation : Router
  ) {}

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    this.apiService.getPost(this.id).subscribe((data) => {
      this.post = data;
    });
  }

}
