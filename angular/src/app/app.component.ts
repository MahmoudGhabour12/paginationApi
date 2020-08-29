import { Component, OnInit } from '@angular/core';
import { Transactions } from './models/transaction';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transactions: any;
  pager = {};
  pageOfItems = [];

  first = 0;
  page = 1;
  rows = 10;
  title = 'easyKash';
  seller_id = 1;
  per_page = 10;
  paging: any = {
    total: 0,
    current_page: 1,
    per_page: 10
  };
  loading = false;
  constructor(private TransactionService: TransactionService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.loadData();
  }

  nextPage(event) {
    console.log(event)
    this.loading = true;
    this.page = (event.first == 0) ? 1 : (event.first / this.per_page) + 1;
    this.loadData();
  }

  loadData() {
    this.TransactionService.getAlltransaction(this.page, this.per_page, this.seller_id)
      .subscribe((result: any) => {


        this.transactions = result.transaction

        this.paging = result.paging;
        console.log(this.paging);
        this.loading = false;

      }, err => {
        this.loading = false;
      });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.transactions ? this.first === (this.transactions.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.transactions ? this.first === 0 : true;
  }

}


