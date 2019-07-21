import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ListPostViewComponent } from './list-post-view/list-post-view.component';
//import { Subject } from 'rxjs/Subject';
//import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


 


const appRoutes: Routes = [
  { path: 'list-post-view', component: ListPostViewComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: '', component: ListPostViewComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent,
    MenuNavigationComponent,
    ListPostViewComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    //ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
