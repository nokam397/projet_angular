import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-blog',
  templateUrl: './resume-blog.component.html',
  styleUrls: ['./resume-blog.component.css']
})
export class ResumeBlogComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }


  redirect2(){
    this.router.navigateByUrl('detail2');
   }

}
