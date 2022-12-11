import { Injectable } from '@angular/core';
import  { HttpClient,HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './posts/post';
import { identifierName } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) { }


  public getAuthors():Observable<any>{
    return this.httpClient.get('http://102046.bloggy.ecole-it.devigne.space/authors/');
  }

  public createPost(payload:Post){
    const header=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    this.httpClient.post<Post>('http://102046.bloggy.ecole-it.devigne.space/posts/',JSON.stringify(payload),{headers:header}).subscribe(res=>{
      console.log(res);
    })
  }

  public getpost():Observable<any>{
    return this.httpClient.get('http://102046.bloggy.ecole-it.devigne.space/posts/');
  }

  public getPost(id:number):Observable<any>{
    return this.httpClient.get('http://102046.bloggy.ecole-it.devigne.space/posts/'+id);


  }

  delete_Post(id:number){

    return this.httpClient.delete('http://102046.bloggy.ecole-it.devigne.space/posts/'+id)


   }


}
