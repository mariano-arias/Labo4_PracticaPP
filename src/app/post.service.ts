// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// import { Post } from './Entidades/Post';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   constructor(private ngFirestore: AngularFirestore) {
//   }

//   getPostAll() {
//     return this.ngFirestore.collection("posts").snapshotChanges()
//   }

//   getPostById() {
//     return this.ngFirestore.collection("posts").doc().valueChanges();
//   }

//   createPost(post: Post) {
//     return new Promise<any>((resolve, reject) => {
//       this.ngFirestore
//         .collection("posts")
//         .add(post)
//         .then((response) => {
//           console.log(response);
//         },
//           (error) => {
//             reject(error)
//           })
//     }
//     )
//   }

//   update(post: Post) {
//     return
//     this.ngFirestore
//       .collection("posts")
//       .doc(post.id)
//       .update(
//         {
//           title: post.title,
//           content: post.content,
//           author: post.author
//         }
//       )
//   }
//   deletePost(post: Post) {
//     return this.ngFirestore
//       .collection("posts")
//       .doc(post.id)
//       .delete();
//   }
// }