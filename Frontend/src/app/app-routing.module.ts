import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtrainsComponent } from './addtrains/addtrains.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AuthGuardService } from './auth-guard.service';
import { AvailabletrainsComponent } from './availabletrains/availabletrains.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { CancelticketsComponent } from './canceltickets/canceltickets.component';
import { HomeComponent } from './home/home.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagetrainsComponent } from './managetrains/managetrains.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { SearchtrainsComponent } from './searchtrains/searchtrains.component';
import { UpdatetrainsComponent } from './updatetrains/updatetrains.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserticketinfoComponent } from './userticketinfo/userticketinfo.component';

const routes: Routes = [{ path: '', redirectTo:'home', pathMatch: 'full'},
                        { path:'home', component:HomeComponent},
                        { path:'adminhome', component:AdminhomeComponent, canActivate:[AuthGuardService]},
                        { path:'userhome', component:UserhomeComponent, canActivate:[AuthGuardService]},
                        { path:'userdashboard', component:UserdashboardComponent, canActivate:[AuthGuardService]},
                        { path:'userreg', component:RegisteruserComponent},
                        { path:'userLogin', component:LoginuserComponent},
                        { path:'AdminLogin', component:LoginadminComponent},
                        { path:'addtrains', component:AddtrainsComponent, canActivate:[AuthGuardService]},
                        { path:'managetrains', component:ManagetrainsComponent, canActivate:[AuthGuardService]},
                        { path:'updatetrains/:trainNo', component:UpdatetrainsComponent, canActivate:[AuthGuardService]},
                        { path:'searchtrains', component:SearchtrainsComponent},
                        { path:'availabletrains', component:AvailabletrainsComponent, canActivate:[AuthGuardService]},
                        { path:'booktickets/:trainNo', component:BookticketsComponent, canActivate:[AuthGuardService]},
                        { path:'canceltickets', component:CancelticketsComponent, canActivate:[AuthGuardService]},
                        // { path:'navbaruser', component:NavbaruserComponent, canActivate:[AuthGuardService]},
                        { path:'bookingdetails', component:BookingdetailsComponent, canActivate:[AuthGuardService]},
                        { path:'logout', component:LogoutComponent, canActivate:[AuthGuardService]},
                        { path:'userticketinfo', component:UserticketinfoComponent},
                        { path:'trainsdetails', component:UserDetailsComponent},
                        { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserDetailsComponent,PageNotFoundComponent];
