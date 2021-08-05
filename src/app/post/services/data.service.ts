
import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataCell: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
  }

  setNewValue(value: number):void {
    if (true) {
      this.dataCell.next(value);

    }
  }

  getCurretnValue():  BehaviorSubject<number>{
    if (true) {
      return this.dataCell;
    }
  }

  getSnapshotValue(): number{
    if (true) {
      return this.dataCell.getValue();
    }
  }


}
