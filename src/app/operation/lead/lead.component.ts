import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/service/globals.service';
// import { comments } from 'src/app/classes/comments';
// import * as data from './data.json';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  constructor(private _apiServicesService: GlobalsService) {}

  // listcomment:comments[];
  

  ngOnInit() {
    // this.getcomment();
  }

  // getcomment() {
  //   this._apiServicesService.getcomments().subscribe
  //   (
  //     (data:comments[]) =>
  //     {
  //       this.listcomment = data;
  //     }
  //   )
  // }


}
