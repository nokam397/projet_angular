import { Post } from './../posts/post';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finalisation',
  templateUrl: './finalisation.component.html',
  styleUrls: ['./finalisation.component.css'],
})
export class FinalisationComponent implements OnInit {
  postList: Post[] = [];
  post: Post = new Post();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getpostList();
  }

  redirect8(post:Post){
    this.router.navigate(['/detail8',post.id]);

   }

  getpostList() {
    this.apiService.getpost().subscribe((data) => {
      console.log(data);
      this.postList = data;
    });
  }


}
