
import { Injectable } from '@angular/core';
//importing http client to make requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import{ Observable} from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'ZTE3M2ZjNjhkZjhmMzE2MTQzYTE3OGY0NjRkODVlYjljNjMwNTg5NGMyOTk4MzJkODM2YjY4ODNiNDBiZjY0Y2E1MTNlNGJlZWQ0OWZiMzExZmM3YzQzMDYyZjgxYzQzMGU2MzE2ODQwYjJjNTQxY2UzYzUyNTc2NTA4MTMzY2RlZA==';


  constructor(private _http:HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle erroe Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  
  //method to return all the blogs
  public getAllBlogs():Observable<any>{
    let myResponse = this._http.get(this.baseUrl+"/all?authToken=ZTE3M2ZjNjhkZjhmMzE2MTQzYTE3OGY0NjRkODVlYjljNjMwNTg5NGMyOTk4MzJkODM2YjY4ODNiNDBiZjY0Y2E1MTNlNGJlZWQ0OWZiMzExZmM3YzQzMDYyZjgxYzQzMGU2MzE2ODQwYjJjNTQxY2UzYzUyNTc2NTA4MTMzY2RlZA==");
    return myResponse;

  }
  //method to get a particular blog
   public getSingleBlogInfo(currentBlogId):Observable<any> {
    let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken=ZTE3M2ZjNjhkZjhmMzE2MTQzYTE3OGY0NjRkODVlYjljNjMwNTg5NGMyOTk4MzJkODM2YjY4ODNiNDBiZjY0Y2E1MTNlNGJlZWQ0OWZiMzExZmM3YzQzMDYyZjgxYzQzMGU2MzE2ODQwYjJjNTQxY2UzYzUyNTc2NTA4MTMzY2RlZA==');
    return myResponse;
   }

   //method to create blog
   public createBlog(blogData):any {
    let myResponse = this._http.post(this.baseUrl + '/create'+ '?authToken='+ this.authToken,blogData);
    return myResponse;
   }

   //delete blog
   public deleteBlog(blogId): any {
     let data={};
     let myResponse = this._http.post(this.baseUrl + '/' + blogId+ '/delete' +'?authToken='+ this.authToken,data);
     return myResponse;
   }

   //edit blog
   public editBlog(blogId,blogData):any {
     let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken='+ this.authToken,blogData);
     return myResponse;

   }
}
