import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Welcome child component teacher';
  greet='';
  // constructor() {}
  //teacherId = 45;
  loginUser(item:any){
    console.warn(item);
  }

  studinfo : any[] = [];
 
  loginFormm=new FormGroup({
    user:new FormControl(''),
    password:new FormControl(''),
  })

  loginUser1(){
    console.warn(this.loginFormm.value)
  }
  parentFunction(data:any){
    console.warn('app component: '+data)
    this.studinfo.push(data)
  }
  onClick(event: any)
  {
    console.log(event);
    this.greet=event.pointerType;
  }
  
  inputText:string = " ";
  destroy:boolean= true;
  OnSubmit(inputEL:HTMLInputElement){
    this.inputText=inputEL.value;
  }
  DestroyComponent(){
    this.destroy=false;
  }
}
