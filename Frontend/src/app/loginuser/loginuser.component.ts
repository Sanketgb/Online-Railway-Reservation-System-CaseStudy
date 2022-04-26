import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPassengerService } from '../loginpassenger.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  x: any;

  adminlog=new FormGroup(
    {
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
    })
    constructor(private httpClientService: LoginPassengerService, private router:Router) { }
  
    ngOnInit(): void {
    }
  //   validate()
  //   {
  //     //console.warn(this.addResto.value)
  //     this.httpClientService.saveResto(this.adminlog.value).subscribe((result: any)=>{
  //     console.warn("result",result)    
  //       this.x=result
  //       console.log(this.x)
  //       console.warn(this.x.jwt)
  //       if(this.x.jwt=="no"){
  //         (<any>this.router).navigate(["/userLogin"])  
  //         alert("Invalid Credentials");
  //       }
  //       else
  //       {
  //         (<any>this.router).navigate(["/userhome"])
  //         alert("Welcome!");

  //       }
  //   })
  //   }
  // } 

  // validate()
  //   {
  //     //console.warn(this.addResto.value)
  //     this.httpClientService.logUser(this.adminlog.value).subscribe((result: any)=>{
      
  //     console.warn("result",result)
  //     console.log(result.jwt);    
  //       this.x=result
  //       console.log(this.x)
  //       console.warn(this.x.jwt)
  //       console.warn(this.x.jwt)
  //       if(this.x.success=="true"){
  //         sessionStorage.setItem('loginData',JSON.stringify(this.x.jwt));
  //         alert("Welcome!");
  //         (<any>this.router).navigate(["/userhome"])
  //       }
  //       else
  //       {
  //         alert("Invalid Credentials");
  //         (<any>this.router).navigate(["/userLogin"])
  //       }
  //   }, error => { alert("Please Enter Valid Credentials");})
  //   }

    validate() {
      this.httpClientService.authent(this.adminlog.value.username, this.adminlog.value.password);
    }

  }