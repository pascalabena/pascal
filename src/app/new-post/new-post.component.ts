import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService : PostService,private router: Router) { }

  ngOnInit() 
  {
  }
  
  onSubmit(form: NgForm) {
      
    const id=0;  
    const title = form.value['title'];
    const content = form.value['content'];
    const loveIts=0;
    const numberLoveIt=0;
    const numberdontLoveIt=0;
    const created_at=new Date();
    
     
  
    this.postService.addPost(id,title,content,loveIts,numberLoveIt,numberdontLoveIt,created_at )
    this.postService.savePostsToServer();
    //this.router.navigate(['/list-post-view']);
    
  }
   

}
