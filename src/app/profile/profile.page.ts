import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage'
import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';


import auth from 'firebase/firebase-auth';


export interface imageData{
  fileName: string;
  filePath: string;
  size: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: ProfileModel;
  
  profile: any;
  profileName: any;
  profileImageUrl: any;
  profileEmail: any;

  fileName:string;
  fileSize: string;
  isLoading:boolean;
  isLoaded: boolean;
 private imageCollection: AngularFirestoreCollection<imageData>;
  imagefile: Observable<imageData[]>;
  imageUpload: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  FileImageUPload: Observable<any>;
  UserUID: AngularFirestoreDocument;

  constructor(
    private database: AngularFirestore, 
    private storage: AngularFireStorage,
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
   private loading :LoadingController
  ) { 
    this.isLoading = false;
    this.isLoaded = false;
    this.imageCollection = this.database.collection<imageData>('loginUploads');
    this.imagefile = this.imageCollection.valueChanges();
    firebase.auth().onAuthStateChanged(user => {
      console.log("AUTH_USER", user);

      if (user) {
        const result = this.database.doc(`/profile/${this.authService.getUID()}`);
        var userprofile = result.valueChanges();
        userprofile.subscribe(profile => {
          console.log("PROFILE::", profile);
           this.profileName = profile['name'];
           this.profileImageUrl = profile['photoUrl'];
           this.profileEmail = profile['email'];
        })
      }
    })
  }

  ngOnInit() {
    this.route.data
    .subscribe((result) => {
      this.user = result['data'];
    }, (err) => {})
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['sign-in']);
    }, (error) => {
      console.log('signout error', error);
    });
  }


  async uploadImagetoFirebase(event){

    const load = await this.loading.create({
      spinner:'dots',
    })
      load.present();
   
    const file = event.target.files;
    console.log(file);
    var fileName = file[0];
    console.log(fileName);

    if(fileName.type.split('/')[0] !=="image" ){
      console.error("File is not an Image");
      return;
    }

    this.isLoading = true;
    this.isLoaded = false;

    const path =  `loginUploads/${new Date().getTime()}_${fileName.name}`;

    var fileRef = this.storage.ref(path);

    this.imageUpload = this.storage.upload(path,fileName);
    this.loading.dismiss();

    this.percentage = this.imageUpload.percentageChanges();

    this.imageUpload.then( res=>{
      var imagefile = res.task.snapshot.ref.getDownloadURL();
      imagefile.then( downloadableUrl=>{
        console.log("URL", downloadableUrl);
        this.database.doc(`profile/${this.authService.getUID()}`).update({
          photoUrl: downloadableUrl
        });
      })
    })
   
    
 
  }
 


  goToNextPage(){
    this.router.navigate(['tabs']);
  }

}
