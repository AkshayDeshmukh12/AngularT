import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration-component/registration-component.component';
import { UserProfileComponent } from './user-profile-component/user-profile-component.component';



const routes: Routes = [];

@NgModule({
  declarations: [ 
    HomeComponent,RegistrationComponent,UserProfileComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule { }
