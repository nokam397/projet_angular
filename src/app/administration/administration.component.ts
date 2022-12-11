import { Post } from './../posts/post';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

   postList:Post[]=[];
   post:Post=new Post();


  constructor(private apiService: ApiService,private router: Router,private http: HttpClient) {


   }


  ngOnInit(): void {
    this.getpostList();

  }

   delete_Post(id:number){

    this.apiService.delete_Post(id).subscribe((data)=>{
      this.ngOnInit();



  });

  this.ngOnInit();


   }

   redirect(){
    this.router.navigateByUrl('detail');
   }

   redirect7(){
    this.router.navigateByUrl('detail7');
   }



   redirect5(post:Post){
    this.router.navigate(['/detail5',post.id]);

   }

   getpostList(){
    this.apiService.getpost().subscribe((data)=>{
      console.log(data);
      this.postList = data ;

  });

   }







}
