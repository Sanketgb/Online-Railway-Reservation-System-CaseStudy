import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TraindataService } from '../traindata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  trains: any;

  constructor(private service: TraindataService) { }

  ngOnInit(): void {
   this.trains=this.service.getTrains().subscribe((data:any)=>this.trains=data);
  }

  // searchFrom(trainFrom:any) {
  //   let response= this.service.getTrainsbyfrom(trainFrom);
  //   response.subscribe((data:any) => this.trains=data);
  // }

  // searchTo(trainTo:any) {
  //   let response= this.service.getTrainsbyfrom(trainTo);
  //   response.subscribe((data:any) => this.trains=data);
  // }

}
