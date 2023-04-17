import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Student } from "../model/students";
import { Observable } from "rxjs";

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  createStudentService(studentDetails: any) {
    this.http.post('/api/addStudent', studentDetails).subscribe((res)=>{
      console.log("Created new student");
    },
    (error)=>{
      console.log(error);
    }
    );
  }

  getAllStudentsService(): Observable<Student[]> {
    return this.http.get<Student[]>('/api/getStudents');
    }

  getOneStudentService(name: string): Observable<Student> {
    return this.http.get<Student>('/api/getStudent/' + name);
  }

  updatedStudentDetails: any = {}
  studName: string = "";

  updateStudentService(studentDetails: any) {
    this.http.put('/api/updateStudent', studentDetails).subscribe((res)=>{
      console.log("Updated student's details");
    },
    (error)=>{
      // console.log(error);
    }
    );
  }

  deleteStudentService(name: any) {
    this.http.delete('/api/deleteStudent/' + name).subscribe((res)=>{
      console.log("Deleted the student");
    });
  }

}
