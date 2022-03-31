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
  loginForm=new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
   get email() {return this.loginForm.get('email')}
   get password() { return this.loginForm.get('password')}
}
