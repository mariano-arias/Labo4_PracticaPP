import { Component } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';


  constructor( private service : PostService) {
    this.service.getPostsAll().subscribe( doc => {
      console.log(doc);
      doc.forEach((element: any) => {
        console.log(element.payload.doc.id);
        
      });
    })

  }
}
