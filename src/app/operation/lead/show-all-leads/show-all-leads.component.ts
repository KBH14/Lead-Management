import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { ShowAllLeadsService } from './show-all-leads.service';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  mobileNumber: string;
  category: string;
  processState: string;
  cratedDate: string;
  scheduleDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: '', mobileNumber: '', email: '', category: '', processState: '', cratedDate: '', scheduleDate: '' }
];

@Component({
  selector: 'app-show-all-leads',
  templateUrl: './show-all-leads.component.html',
  styleUrls: ['./show-all-leads.component.css']
})
export class ShowAllLeadsComponent implements OnInit {

  constructor(public dialog: MatDialog, private location: Location,private _showallleadService: ShowAllLeadsService) { }

  backClicked():void{
    this.location.back();
  }
  
  PeriodicElement:Array<any>
  displayedColumns: string[] = ['id', 'name', 'mobileNumber', 'email', 'category', 'processState', 'cratedDate', 'scheduleDate'];
  dataSource = new MatTableDataSource<PeriodicElement[]>();
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator, {static: false}) set paginator(value:MatPaginator)
  {
    this.dataSource.paginator = value;
  }

  @ViewChild(MatSort, {static: false}) set sort(value: MatSort)
  {
    this.dataSource.sort = value;
  }

  getShowalllead() {
    this._showallleadService.getShowalllead().subscribe
    (
      data =>
      {
        this.PeriodicElement=data;
        this.dataSource= new MatTableDataSource(this.PeriodicElement)
      }
    )
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getShowalllead();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}