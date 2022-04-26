import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPassengerService } from '../loginpassenger.service';
import { TraindataService } from '../traindata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {

  bookings : any;

  constructor(private service:TraindataService, private serv:LoginPassengerService, private router:Router) { }

  ngOnInit(): void {

    let response = this.serv.getTicket();
    console.log(response);
    response.subscribe((data:any) => this.bookings = data);

    //let response = this.service.getBookings();
    //response.subscribe((data:any) => this.bookings = data);

    // const username=sessionStorage.getItem('username');
    // let response = this.service.getBookings(username);
    // response.subscribe((data:any) => this.bookings = data);
  }

  cancelTicket(pnrId:any) {
    Swal.fire({
      title:'Are you Sure?',
      text:'',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes',
      cancelButtonText:'Cancel'
  
    }).then((result) => {
      if(result.value) {
        let response = this.serv.deleteTicket(pnrId);
        console.log(pnrId);
        response.subscribe((data:any) => this.bookings=data);
          (<any>this.router).navigate(["/bookingdetails"])  
            alert("Ticket Cancelled Successfully")
      }
    })

  }

}
