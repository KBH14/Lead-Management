import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  mobileNumber: string;
  category: string;
  processState: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: '', email: '', mobileNumber: '', category: '', processState: '', Action: '' }
];

@Component({
  selector: 'app-all-call-log',
  templateUrl: './all-call-log.component.html',
  styleUrls: ['./all-call-log.component.css']
})
export class AllCallLogComponent implements OnInit {

  states: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',];
chart = [];
private _myPieChart_1: any;
public get myPieChart(): any {
  return this._myPieChart_1;
}
public set myPieChart(value: any) {
  this._myPieChart_1 = value;
}


constructor(public dialog: MatDialog) { }


displayedColumns: string[] = ['id', 'name', 'email', 'mobileNumber', 'category', 'processState', 'Action'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
selection = new SelectionModel<PeriodicElement>(true, []);

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, { static: true }) sort: MatSort;


ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
}