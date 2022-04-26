import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Train } from '../train';
import { TraindataService } from '../traindata.service';

@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent implements OnInit {

  // bookingform!: FormGroup;
  trainNo!: String;
  train: Train = new Train();
  book: Booking = new Booking();
  message:any;
  bookdata: any;
  book1: any;
  train1: any;

  //constructor(private service: TraindataService, private router: Router) { }
  constructor(private service: TraindataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.trainNo = this.route.snapshot.params['trainNo'];
    this.service.getTrainByNo(this.trainNo).subscribe( data => {
      this.train = data;
      console.log(this.train);
      console.log(this.train.trainNo);
      
      

    }, error => console.log(error));
    // this.bookingform=this.fb.group({
    //   passengername:[''],
    //   passengernumber:[''],
    //   passengeremail:[''],
    //   passengertrainNo:[''],
    //   passengertrainName:[''],
    //   passenger:[''],
    //   passengertrainFrom:[''],
    //   passengertrainTo:[''],
    //   passengerdate:[''],
    //   passengertotalseats:[''],

    // })
  }

  bookTicket() {
    // console.log(this.book);
    // console.log(this.train);
    
     let book1=this.book;
     let train1=this.train;
     let book2 = Object.assign(book1, train1)
     console.log((book2));
      this.service.bookNow(book2).subscribe( data => {
        console.log(data);
      
    })
    alert("Ticket Booking Successful");
    this.router.navigate(['/userticketinfo']);
    
  
  }

}
