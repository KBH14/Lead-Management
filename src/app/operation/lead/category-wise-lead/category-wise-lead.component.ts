import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { CategoryWiseLeadService } from './category-wise-lead.service';

export interface PeriodicElement {
  id: number;
  name: string;
  mobileNumber: number;
  email: string;
  category: string;
  processState: string;
  autodial:boolean;
  details:boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: '', mobileNumber: 1234, email: '', category: '', processState: '', autodial:true, details:true}
 ];
@Component({
  selector: 'app-category-wise-lead',
  templateUrl: './category-wise-lead.component.html',
  styleUrls: ['./category-wise-lead.component.css']
})
export class CategoryWiseLeadComponent implements OnInit {

  constructor(public dialog: MatDialog, private location: Location,private _categorywiseleadService: CategoryWiseLeadService) { }

  // listcomment:PeriodicElement[];

  PeriodicElement:Array<any>
  displayedColumns: string[] = ['id', 'name', 'mobileNumber', 'email', 'category', 'processState', 'autodial', 'details'];
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

  backClicked():void{
    this.location.back();
  }

  getCategorywiselead() {
    this._categorywiseleadService.getCategorywiselead().subscribe
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
    this.getCategorywiselead();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}