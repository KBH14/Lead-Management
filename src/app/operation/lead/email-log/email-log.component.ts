import { Component, OnInit , ViewChild} from '@angular/core';
import {  MatTableDataSource} from '@angular/material';
import { MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { EmailLogService } from './email-log.service';
// import { comments } from 'src/app/classes/comments';

export interface TeleCaller{
  customername: string;
  phone: number;
  email: string;
  mailsubject: string;
  date: string
  mailstatus: string;
  attachment: boolean;
  view : boolean;
}

const ELEMENT_DATA: TeleCaller[]=[
  {customername: '', phone: 55555 , email: '' , mailsubject: '', date: '', mailstatus: '', attachment: true, view:true},
]

@Component({
  selector: 'app-email-log',
  templateUrl: './email-log.component.html',
  styleUrls: ['./email-log.component.css']
})

export class EmailLogComponent implements OnInit {

  constructor(private location: Location,private _emaillogService: EmailLogService) { }
  
  // listcomment:TeleCaller[];

  TeleCaller:Array<any>
  displayedColumns: string[] = ['customername', 'phone', 'email', 'mailsubject', 'date', 'mailstatus', 'attachment', 'view'];
  dataSource = new MatTableDataSource<TeleCaller[]>();
  selection = new SelectionModel<TeleCaller>(true, []);

  @ViewChild(MatPaginator, {static: false}) set paginator(value:MatPaginator)
  {
    this.dataSource.paginator = value;
  }

  @ViewChild(MatSort, {static: false}) set sort(value: MatSort)
  {
    this.dataSource.sort = value;
  }
  
  
  backClicked():void{
    this.location.back();
  }

  getEmaillog() {
    this._emaillogService.getEmaillog().subscribe
    (
      data =>
      {
        this.TeleCaller=data;
        this.dataSource= new MatTableDataSource(this.TeleCaller)
      }
    )
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEmaillog();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
