import { Component,Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    
  @Input() id : number ;
  @Input() title : string ;
  @Input()content : string ;
  @Input()loveIts : number;
  @Input() created_at =  Date() ;

  @Input() numberLoveIt: number;
  @Input() numberdontLoveIt: number;
  @Input() index:number ;
  
  constructor(private postService :PostService) { }

  ngOnInit() 
  {
      
  }

  loveIt()
  {
    this.loveIts = this.loveIts+1;
    this.numberLoveIt = this.numberLoveIt+1;
        
    this.postService.updateUpLoveIts(this.id)    
    this.postService.updateUpNumberLoveIts(this.id) 
    this.postService.savePostsToServer()

   
  }

  dontLoveIt()
  {
    this.loveIts = this.loveIts-1;
    this.numberdontLoveIt = this.numberdontLoveIt+1;

    this.postService.updateDownLoveIts(this.id)
    this.postService.updateUpNumberDontLoveIts(this.id) 
    this.postService.savePostsToServer()
  }
  
   deletePost()
   {      
      
        if(confirm('Supprimer ? (Delete ?)'  )) {
          
           this.postService.deletePost(this.index)
           this.postService.savePostsToServer();
           console.log( this.id)
           
        } 
        else 
        {
           console.log( this.id)
           return null;
        }
    }
  


}
