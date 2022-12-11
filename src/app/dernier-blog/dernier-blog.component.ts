import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dernier-blog',
  templateUrl: './dernier-blog.component.html',
  styleUrls: ['./dernier-blog.component.css']
})
export class DernierBlogComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  redirect3(){
    this.router.navigateByUrl('detail3');
   }

}
