import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraindataService } from '../traindata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-managetrains',
  templateUrl: './managetrains.component.html',
  styleUrls: ['./managetrains.component.css']
})
export class ManagetrainsComponent implements OnInit {

  trains : any;

  constructor(private service: TraindataService, private router: Router) { }

  ngOnInit() {
    let response = this.service.getTrainsforAdmin();
    response.subscribe((data:any) => this.trains = data);
  }

  updateTrain(trainNo:any){
      console.log(trainNo);
      this.router.navigate(["updatetrains",trainNo]);
    }


  public deleteTrains(trainNo : any){
    Swal.fire({
      title:'Are you Sure?',
      text:'',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes',
      cancelButtonText:'Cancel'

    }).then((result) => {
      if(result.value) {
        let response = this.service.deleteTrain(trainNo);
    response.subscribe((data:any) => this.trains=data);
      (<any>this.router).navigate(["/managetrains"]);  
        alert("Train deleted Successfully");
      }
    })
    //public deleteTrains(trainNo : any){
    // let response = this.service.deleteTrain(trainNo);
    // response.subscribe((data:any) => this.trains=data);
    //   (<any>this.router).navigate(["/managetrains"])  
    //     alert("Train deleted Successfully")
  }

}

