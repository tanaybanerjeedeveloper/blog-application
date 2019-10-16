
import { BlogHttpService } from './../blog-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories=["comedy","drama","action","tech"];

  constructor(private toastr: ToastrService,private _route:ActivatedRoute,private router:Router, private blogHttpService: BlogHttpService) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(
      data=> {
        console.log(data);
        this.currentBlog=data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);
      },
      error => {
        console.log("error occured");
        console.log(error.errorMessage);
      }
    )
  }//end of init
  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('blog edited successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId])
        },2000)
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error("some error occured","Error");
      }
    )
  }

}
