import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
 title="Exam starts at 4AM"
 @Input()
  parenttoexam: string[] = [];

  @Input()
  value1:string=" ";
}
