import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  constructor() { }

  
  public allBlogs = [
    {
      blogId: "1",
      created: "2019-09-13T01:46:15+00:00",
      tags:[],
      author:"Admin",
      category:"Comedy",
      isPublished:true,
      views:0,
      bodyHtml:"<h1>this is blog body</h1>",
      description:"this is blog 1 description",
      title:"This is blog 1"
    },
    {
      blogId: "2",
      created: "2019-09-13T01:46:15+00:00",
      tags:[],
      author:"Admin",
      category:"Comedy",
      isPublished:true,
      views:0,
      bodyHtml:"<h1>this is blog body</h1>",
      description:"this is blog 1 description",
      title:"This is blog 2"
    },
    {
      blogId: "3",
      created: "2019-09-13T01:46:15+00:00",
      tags:[],
      author:"Admin",
      category:"Comedy",
      isPublished:true,
      views:0,
      bodyHtml:"<h1>this is blog body</h1>",
      description:"this is blog 1 description",
      title:"This is blog 3"
    }


  ]
  // method to return all the blogs
  public getAllBlogs(): any{
    return this.allBlogs;

  }
  //method to get a particular blog
  public getSingleBlogInfo(currentBlogId): any {
    for(let blog of this.allBlogs) {
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }

}

