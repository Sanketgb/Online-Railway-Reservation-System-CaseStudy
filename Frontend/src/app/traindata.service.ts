import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { Train } from './train';

// export class Trains {
//   constructor(
//    public  trainNo: String,
// 	  public  trainName: String,
// 	  public  trainFrom: String,
// 	  public  trainTo: String,
// 	  public  fare: number,
// 	  public  seats: number,
// 	  public  time: String
//   ) {
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class TraindataService {

  private baseUrl = "http://localhost:8089/user/viewtrain";
  private baseUrl1 = "http://localhost:8088/admin/updatetrain";

  constructor(private http:HttpClient) { }

  public getTrains() {
    return this.http.get("http://localhost:8089/user/viewalltrains");
  }

  getTrainsall() {
    return this.http.get("http://localhost:8150/train/viewalltrains");
  }

  getTrainsforAdmin() {
    return this.http.get("http://localhost:8088/admin/viewalltrains");
  }
  
public getBookings() {
  return this.http.get("http://localhost:8150/user/getallorders");
}

  public deleteTrain(trainNo:any){
    return this.http.delete("http://localhost:8088/admin/deletetrain/"+trainNo);
  }

  addNewTrain(train: Train): Observable<Object> {
    return this.http.post("http://localhost:8088/admin/addtrain", train);
  }

  getTrainByno(trainNo:String): Observable<Train> {
    return this.http.get<Train>("http://localhost:8088/admin/viewtrainbyno/"+trainNo);
  }

  getTrainByNo(trainNo:String): Observable<Train> {
    return this.http.get<Train>(`${this.baseUrl}/${trainNo}`);
  }

  updateTrains(trainNo:String, train: Train): Observable<Object> {
    return this.http.put(`${this.baseUrl1}/${trainNo}`, train);
  }

  bookNow(book: Booking): Observable<Object> {
    return this.http.post("http://localhost:8089/user/bookticket", book);
  }

  getTrainsbyfrom(trainFrom:any) {
    return this.http.get("http://localhost:8087/train/findfrom/"+trainFrom);
  }

  getTrainsbyto(trainTo:any) {
    return this.http.get("http://localhost:8087/train/findto/"+trainTo);
  }

  getTrainsbw(fromTrain:any,toTrain:any) {
    return this.http.get("http://localhost:8087/train/findbw/"+fromTrain+'/'+toTrain);

  }

}