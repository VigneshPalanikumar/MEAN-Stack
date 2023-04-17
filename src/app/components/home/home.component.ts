import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('name') enteredName: ElementRef;
  @ViewChild('age') enteredAge: ElementRef
  @ViewChild('address') enteredAddress: ElementRef

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  studentDetails: any = {};

  createObject(name: any, age: any, address: any) {
    this.studentDetails = {
      studName: name,
      studAge: age,
      studAddress: address
    }
  }

  createStudent(name: any, age: any, address: any) {
    this.createObject(name, age, address);
    this.appService.createStudentService(this.studentDetails);
  }

  updateStudent(name: any, age: any, address: any) {
    this.createObject(name, age, address);
    this.appService.updateStudentService(this.studentDetails);
  }

  deleteStudent(name: any) {
    this.appService.deleteStudentService(name);
    this.enteredName.nativeElement.value = "";
  }


}
