import { Transactions } from './../models/transaction';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  APIURL = 'http://localhost:3000/transaction';
  constructor(private http: HttpClient) { }


  getAlltransaction(page: number, per_page, seller_id) {
    return this.http.get<Transactions>(this.APIURL + `?page=${page}&per_page=${per_page}&seller_id=${seller_id}`);
  }


}
