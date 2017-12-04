import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()

export class EmpService {

  constructor( private http: Http) { }
  getEmployees() {
    return this.http.get( '')
       .map(res => res.json());
  }
   addEmployee(info) {
    return this.http.post('http://venkat:venkat@ds129166.mlab.com:29166/employees', info)
        .map(res => res.json());
  }
  getEmployee(id) {
    return this.http.get('http://venkat:venkat@ds129166.mlab.com:29166/employees' + id)
        .map(res => res.json());
  }
  deleteEmployee(id) {
    return this.http.delete('http://venkat:venkat@ds129166.mlab.com:29166/employees' + id)
        .map(res => res.json());
  }
  updateEmployee(id, info) {
    return this.http.put('http://venkat:venkat@ds129166.mlab.com:29166/employees' + id, info)
        .map(res => res.json());
  }
}
