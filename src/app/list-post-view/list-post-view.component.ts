import { Component,OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-list-post-view',
  templateUrl: './list-post-view.component.html',
  styleUrls: ['./list-post-view.component.css']
})

export class ListPostViewComponent implements OnInit, OnDestroy {
    
    posts: any[];
    postsSubscription : Subscription ;
    
    constructor(private postService : PostService) { }
    
    
    
    ngOnInit()
    {
        this.postService.getPostsFromServer()
       
        this.postsSubscription = this.postService.postsSubject.subscribe(
        
            (posts:any[])=>{

                    this.posts=posts;
                  
            }
        );
       
        //this.postService.emitPostsSubject();
        
        
    }
    
    fillPostsData() // récupère les données dans le serveur
    {
        
         
         this.postService.getPostsFromServer()
        
        
    }
    
    ngOnDestroy() 
    {
      this.postsSubscription.unsubscribe();
    }

}
