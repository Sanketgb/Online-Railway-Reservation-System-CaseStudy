import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraindataService } from '../traindata.service';

@Component({
  selector: 'app-availabletrains',
  templateUrl: './availabletrains.component.html',
  styleUrls: ['./availabletrains.component.css']
})
export class AvailabletrainsComponent implements OnInit {

  trains : any;

  constructor(private service: TraindataService, private router: Router) { }

  ngOnInit(): void {
    let response = this.service.getTrains();
    response.subscribe((data:any) => this.trains = data);
  }

  bookTicket(trainNo:String) {
    console.log(trainNo);
    this.router.navigate(["booktickets", trainNo]);
  }

}
