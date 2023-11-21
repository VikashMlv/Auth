import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

//lazy load routing for user lazy load component

const routes : Routes = [
  {path:"",component:ProfileComponent}
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) //for Child 
  ]
})
export class UserLazyLoadModule { 

  constructor(){
    console.log("Lazy Load Module Load")
;  }
}
