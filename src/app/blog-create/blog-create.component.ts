
import { BlogHttpService } from './../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router";
//import {ToastsManager} from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService,private _route: ActivatedRoute,private router: Router,private toastr:ToastrService) {
    
   }

  //instance vars or properties
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy","Drama","Action","Tech"];

  ngOnInit() {
  }

  public createBlog():any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }// end of blog data
    console.log(blogData);
    
    this.blogHttpService.createBlog(blogData).subscribe(

      data=> {
        console.log("Blog created");
        console.log(data);
        this.toastr.success('Blog posted successfully','Success!');
        setTimeout(()=> {
          this.router.navigate(['/blog',data.data.blogId]);
        },2000)
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured','Error');
      }
    )
  }// end of create blog method

}
