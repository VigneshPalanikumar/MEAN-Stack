import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  student$: Observable<any>;
  allStudent$ : Observable<any>;
  allStudentDisplay$ : Observable<any>;


  columnsToDisplay = ['name', 'age', 'address'];
  display: boolean = false;

  name: string;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.allStudentSearch();
  }

  getAllStudents() {
    this.allStudent$ = this.appService.getAllStudentsService();
    this.display = !this.display;
  }

  getOneStudent(name: string) {
    this.student$ = this.appService.getOneStudentService(name);
  }

  allStudentSearch() {
    this.allStudentDisplay$ = this.appService.getAllStudentsService();
  }

}
