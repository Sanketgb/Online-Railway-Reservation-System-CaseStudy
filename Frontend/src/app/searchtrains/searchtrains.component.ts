import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraindataService } from '../traindata.service';

@Component({
  selector: 'app-searchtrains',
  templateUrl: './searchtrains.component.html',
  styleUrls: ['./searchtrains.component.css']
})
export class SearchtrainsComponent implements OnInit {

  trains: any;
  trainFrom: any;
  trainTo: any;

  constructor(private service: TraindataService, private router:Router) { }

  ngOnInit(): void {
    this.trains=this.service.getTrainsall().subscribe((data:any)=>this.trains=data);
   }
 
   public searchFrom() {
     console.log('printeddddddd')
     let response= this.service.getTrainsbyfrom(this.trainFrom);
     response.subscribe((data:any) => this.trains=data);
     console.log(this.trains)
   }
 
   public searchTo() {
     let response= this.service.getTrainsbyto(this.trainTo);
     response.subscribe((data:any) => this.trains=data);
   }

   searchbw(fromTrain:any,toTrain:any) {
      console.log(fromTrain,toTrain)
      let response= this.service.getTrainsbw(fromTrain,toTrain);
     response.subscribe((data:any) => this.trains=data);


   }


   backNavigation()
  {
    this.router.navigateByUrl("/home")
  }
}
