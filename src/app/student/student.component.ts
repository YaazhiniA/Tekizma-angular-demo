import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Output()parentFunction:EventEmitter<any>=new EventEmitter()

  constructor() {
    console.log(this.parentFunction)
  }


  sendData(){
    console.log('send data pressed')
    let data:any[]=[{name:'yaazhini',age:22, dept:"software"},{name:"Darshini",age:19,dept:"medical"}]
    this.parentFunction.emit(data)
  }
}
