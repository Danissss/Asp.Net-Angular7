import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  // define the model so it can be serialized and pack into packet to send over http
  // this is packed into single model => model to api based on url
  // this will send to net application
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/'+ this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
    // return as PaymentDetail[] array
  }
}
