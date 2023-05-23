import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() {
  }

  private subject = new Subject<any>();

  sendClickEvent() {
    this.subject.next();
  }

  sendIsLogged() {
    this.subject.next(true);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  itemCount: BehaviorSubject<any> = new BehaviorSubject<number>(0);

  setCount(count: number): void {
    this.itemCount.next(count);
  }
}
