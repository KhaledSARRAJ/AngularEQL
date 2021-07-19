import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NumberService {
private numbers!: number[] ;
getFirstFiveNumber():Observable<number[]>{
  //appel de webservice
  return Observable.create(
    (observer: Subscriber<number[]>) => {
      observer.next([1,2,3,4,5]);
    }
  )

}
  constructor() { }
}
