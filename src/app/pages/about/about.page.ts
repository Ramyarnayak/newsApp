import { Component, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { PopoverController } from "@ionic/angular";
import { FirebaseAuthService } from "src/app/firebase-auth.service";
import { ProfileModel } from "src/app/profile/profile.model";
import { PopoverPage } from "../about-popover/about-popover";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
})
export class AboutPage {


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


  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: event,
    });
    await popover.present();
  }
}
