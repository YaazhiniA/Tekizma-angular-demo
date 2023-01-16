import { Component, OnInit , Input, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
/*   @Input() parentMessage : any;
  @Input() parentMessage1 : any; */

/* info = {exam:"english", stucount:50, time:"2PM"}; */
/* info=["yz","hema","priya"]; */
studentNames = ["ram", "hari", "swetha", "anu"];
 @Input() value:string='Lakshmi';
 constructor(){
  console.log('constructor called');
  console.log(this.value);
 }

 ngOnChanges(change:SimpleChanges){
  console.log('ngOnChanges called');
  console.log(change);
 }
ngOnInit(){
  console.log('ngOnInit called');
  console.log(this.value);
}
ngDoCheck(){
  console.log('ngDoCheck called');
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called');
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called');
}
ngAfterViewInit(){
  console.log('ngAfterViewInit called');
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called');
}
ngOnDestroy(){
  console.log('ngOnDestroy');
}
}
