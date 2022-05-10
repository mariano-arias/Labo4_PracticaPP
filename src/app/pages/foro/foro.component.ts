import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  constructor(private postsService : PostService) { }

  ngOnInit(): void {
  //   this.postsService.getPostsAll().subscribe( doc => {
  //     console.log(doc);
  //     doc.forEach((element: any) => {
  //       console.log(element.payload.doc.id);
        
  //     });
  // })
  }

  ver(){
    
    this.postsService.getPostsAll().subscribe( doc => {
      console.log(doc);
      doc.forEach((element: any) => {
        console.log(element.payload.doc.id);
        
      });
  })
  }
}
