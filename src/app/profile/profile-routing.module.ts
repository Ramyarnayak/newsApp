// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { ProfilePage } from './profile.page';
// import { ProfilePageResolver } from './profile.resolver';

// import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);
// const routes: Routes = [
//   {
//     path: '',
//     component: ProfilePage,
//     canActivate: [AngularFireAuthGuard],
//     data: { authGuardPipe: redirectUnauthorizedToLogin },
//     resolve: {
//       data: ProfilePageResolver
//     }
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ProfilePageRoutingModule {}
