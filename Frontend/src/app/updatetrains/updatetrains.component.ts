import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from '../train';
import { TraindataService } from '../traindata.service';

@Component({
  selector: 'app-updatetrains',
  templateUrl: './updatetrains.component.html',
  styleUrls: ['./updatetrains.component.css']
})
export class UpdatetrainsComponent implements OnInit {

  //train : Train = new Train("", "", "", "", 0, 0, "");
  //trainNo:any;
  //train : Train = new Train("", "", "", "", 0, 0, "");
  //trainNo:any;
  trainNo!: String;
  train: Train = new Train();
  message:any;

  //constructor(private service: TraindataService, private router: Router) { }
  constructor(private service: TraindataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.trainNo = this.route.snapshot.params['trainNo'];
    this.service.getTrainByno(this.trainNo).subscribe( data => {
      this.train = data;
      console.log(this.train);
      
    }, error => console.log(error));
  }

  
  async updateTrain() {
    await this.service.updateTrains(this.trainNo, this.train).subscribe( data => {
      
    })
    console.log("Welcome");
    
    alert("Train Updated Successfully")
    this.router.navigate(['/managetrains']);
    
  }

  // goToManageTrains() {
  //   this.router.navigate(['/managetrains']);
  //   alert("Train Updated Successfully")
  // }

  

  // public updateTrain() {
  //   let response = this.service.addNew(this.train);
  //   response.subscribe((data:any) => {
  //     this.message = data;
  //     console.warn("data",data);
  //     (<any>this.router).navigate(["/managetrains"])  
  //       alert("Train Updated Successfully")
  //   });
  // }

    

}
