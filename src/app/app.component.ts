import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import {FormControl , FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanceangular';
  constructor(private viewcontainer:ViewContainerRef ,
         private cfr:ComponentFactoryResolver){
  }
  async loadabt(){
    this.viewcontainer.clear()
    const {AboutusComponent} = await import('./aboutus/aboutus.component');
    this.viewcontainer.createComponent(
      this.cfr.resolveComponentFactory(AboutusComponent)
    )
  }
 async loadcu(){
  this.viewcontainer.clear()
  const {ContactusComponent} = await import('./contactus/contactus.component');
  this.viewcontainer.createComponent(
    this.cfr.resolveComponentFactory(ContactusComponent)
  )
  }
  onSubmit(data:any){
    console.log(data)
  }

  // Reactive Form 
  loginForm = new FormGroup({
    email1: new FormControl('',Validators.required),
    password1: new FormControl('',Validators.required)
  })
   get email1() {return this.loginForm.get('email1')}
   get password1() { return this.loginForm.get('password1')}

   Submit(){
     console.log(this.loginForm.value)
   }
   
}
