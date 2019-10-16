import { Location } from '@angular/common';
import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
//here the blogid will be stored
import { ActivatedRoute, Router } from "@angular/router";
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {
  
  public currentBlog;

  

  constructor(private _route: ActivatedRoute, private router: Router,public blogService: BlogService,public blogHttpService:BlogHttpService,private toastr: ToastrService,private location: Location) {
      console.log("blog-view component called");
   }

  ngOnInit() {
    console.log("blog view oninit is called");
    let myBlogId = this._route.snapshot.paramMap.get("blogId");
    console.log(myBlogId);

    //this.currentBlog = this.blogService.getSingleBlogInfo(myBlogId);
    this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(

      data=>{
        console.log(data);
        this.currentBlog = data["data"];
      },

      error=>{
        console.log("some error ocuured");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=> {
        console.log(data);
        this.toastr.success('Blog deleted successfully!', 'Success!');
        setTimeout(()=> {
          this.router.navigate(['/home']);
        }, 2000)
      },
      error=> {
        console.log("error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured','Error');
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }



  

}
