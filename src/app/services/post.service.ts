import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class PostService {
        
        postsSubject = new Subject<any[]>();
    
        private posts =[
                        /*{
                            id:-1,
                            title: 'title_model',
                            content: 'content_model',
                            loveIts: 0,
                            numberLoveIt: 0,
                            numberdontLoveIt: 0,
                            created_at: new Date()

                        }/*,
                        
                        {
                            id:0,
                            title: 'Titre 1',
                            content: 'Contenu 1',
                            loveIts: 0,
                            numberLoveIt: 0,
                            numberdontLoveIt: 0,
                            created_at: new Date()

                        },
                        {
                            id:1,
                            title: 'Titre 2',
                            content: 'Contenu 2',
                            loveIts: 0,
                            numberLoveIt: 0,
                            numberdontLoveIt: 0,
                            created_at: new Date()

                        },
                        {
                            id:3,
                            title: 'Titre 3',
                            content: 'Contenu 3',
                            loveIts: 0,
                            numberLoveIt: 0,
                            numberdontLoveIt: 0,
                            created_at: new Date()

                        }*/
            
        
        ];
    
   constructor(private httpClient: HttpClient,private router: Router) { }
   
   emitPostsSubject()
   {
       if (this.posts !=null)
       {
            this.postsSubject.next(this.posts.slice()) ;
       } 
   }
    
    getPostById(id: number) 
    {
        const post = this.posts.find(
          (s) => {
            return s.id === id;
          }
        );
        return post;
    }
    
    savePostsToServer() {
        this.httpClient
            .put('https://pascalabena-12ca3.firebaseio.com/posts.json', this.posts)
            .subscribe(
            () => {
              console.log('Enregistrement terminé !');
             
              this.emitPostsSubject()
              this.router.navigate(['/list-post-view']);
              
            },
            (error) => {
              console.log('Erreur ! : ' + error);
                           
              this.emitPostsSubject()
            }
          );
         
         
        
    }
    
    getPostsFromServer() {
        this.httpClient
          .get<any[]>('https://pascalabena-12ca3.firebaseio.com/posts.json')
          .subscribe(
            (response) => {
              this.posts = response;
              this.emitPostsSubject()
              console.log(response)
            },
            (error) => {
              console.log('Erreur ! : ' + error);
             
            }
          );
                 
         
    }
    
   
    
    addPost(id:number,title: string, content: string ,loveIts:number, numberLoveIt: number,  numberdontLoveIt: number,created_at:Date ) 
    {
        
        const postObject = 
        {
          id:0,
          title: '',
          content: '',
          loveIts: 0,
          numberLoveIt: 0,
          numberdontLoveIt: 0,
          created_at: new Date(),
        };
        
        
        
       if (this.posts !=null)
       { 
            id=this.posts.length +1           
            postObject.id = id;
            postObject.title = title;
            postObject.content = content;
            postObject.loveIts = loveIts;
            postObject.numberLoveIt = numberLoveIt;
            postObject.numberdontLoveIt = numberdontLoveIt;
            postObject.created_at = created_at;            

            this.posts.push(postObject); 
       } 
       else
       {
            id=0;           
            postObject.id = id;
            postObject.title = title;
            postObject.content = content;
            postObject.loveIts = loveIts;
            postObject.numberLoveIt = numberLoveIt;
            postObject.numberdontLoveIt = numberdontLoveIt;
            postObject.created_at = created_at; 

            this.posts = new Array(postObject) 
       }    
                
               
           this.emitPostsSubject()
        
    }
    
    updateUpLoveIts(id:number) 
    {  
        this.getPostById(+id).loveIts=this.getPostById(+id).loveIts+1
        
        console.log(" >>> Love It Service : " + this.getPostById(+id).loveIts ) 
        
        this.emitPostsSubject();   
       
    }
    
    
    updateDownLoveIts(id:number) 
    {  
        this.getPostById(+id).loveIts=this.getPostById(+id).loveIts-1
        
        console.log(" >>> Love It Service : " + this.getPostById(+id).loveIts )
        
        this.emitPostsSubject()  ;  
       
    }
    
    
    updateUpNumberLoveIts(id:number) 
    {  
        this.getPostById(+id).numberLoveIt=this.getPostById(+id).numberLoveIt+1
        
        console.log(" >>> Number Love It Service : " + this.getPostById(+id).numberLoveIt ) 
        
        this.emitPostsSubject();   
       
    }
    
    updateUpNumberDontLoveIts(id:number) 
    {  
        this.getPostById(+id).numberdontLoveIt=this.getPostById(+id).numberdontLoveIt+1
        
        console.log(" >>> Number Dont Love It Service : " + this.getPostById(+id).numberdontLoveIt ) 
        
        this.emitPostsSubject();   
       
    }
    
    
    
    
    deletePost(i: number)
    {
       if (this.posts !=null)
       {
        this.posts.splice(i,1)
       }
        
        this.emitPostsSubject();
    }
 
    
  
}