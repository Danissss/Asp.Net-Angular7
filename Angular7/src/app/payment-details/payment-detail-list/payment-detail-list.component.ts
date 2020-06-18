import { PaymentDetail } from './../../shared/payment-detail.model';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})

// notice that PaymentDetailListComponent is implement OnInit interface
// OnInit is from angular core
export class PaymentDetailListComponent implements OnInit {


  // constructor get input from PaymentDetailService which is defined from
  // import { PaymentDetailService } from './../../shared/payment-detail.service';
  // as ToastrService is defined from 
  // import { ToastrService } from 'ngx-toastr';
  constructor(private service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    // PaymentDetailService.refreshList() is defined as below
    // refreshList(){
    //   this.http.get(this.rootURL + '/PaymentDetail')
    //   .toPromise()
    //   .then(res => this.list = res as PaymentDetail[]);
    // }
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(PMId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
