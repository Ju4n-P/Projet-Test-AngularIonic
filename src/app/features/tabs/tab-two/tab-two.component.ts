import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss']
})
export class TabTwoComponent implements OnInit {

  items$: Observable<any[]>;

  constructor(
    private _api
  ) { }

  ngOnInit(): void {
  }

}
