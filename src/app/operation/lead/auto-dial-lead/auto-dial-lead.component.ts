import { Component, OnInit,ViewChild  } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Location } from '@angular/common';
import { AutoDialLeadService } from './auto-dial-lead.service';

export interface PeriodicElement {
  category:string;
  leadcount:number;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {category:'' ,leadcount: 6, action:''}
];


@Component({
  selector: 'app-auto-dial-lead',
  templateUrl: './auto-dial-lead.component.html',
  styleUrls: ['./auto-dial-lead.component.css']
})
export class AutoDialLeadComponent implements OnInit {

  constructor(private location: Location,private _autodialleadService: AutoDialLeadService) { }

  backClicked():void{
    this.location.back();
  }

  PeriodicElement:Array<any>
  displayedColumns: string[] = ['category','leadcount','action'];
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
  
  getAutodiallead()
  {
    this._autodialleadService.getAutodiallead().subscribe
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
    this.getAutodiallead();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
