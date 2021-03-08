import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { ProfileModel } from "src/app/profile/profile.model";
import { FirebaseAuthService } from "src/app/firebase-auth.service";

@Component({
  templateUrl: "./about-popover.html",
  styleUrls: ["./about-popover.scss"],
})
export class PopoverPage {

  user: ProfileModel;

  constructor(
    public popoverCtrl: PopoverController,
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe((result) => {
      this.user = result['data'];
    }, (err) => {})
  }
  // openContactForm() {
  //   this.router.navigate(["app/tabs/contact"]);
  //   this.popoverCtrl.dismiss();
  // }

  // openUrl(url: string) {
  //   window.open(url, "_blank");
  //   this.popoverCtrl.dismiss();
  // }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['sign-in']);
    }, (error) => {
      console.log('signout error', error);
    });
  }
}
