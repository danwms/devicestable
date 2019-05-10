import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface DeviceData {
  id: string;
  name: string;
  deviceType: string;
  site: string;
  group: string;
  maxImport: number;
  maxExport: number;
  organisation: string;
  power: number;
  service: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample implements OnInit {
  displayedColumns: string[] = ['deviceType', 'id', 'name', 'site',  'group', 'maxImport', 'maxExport', 'organisation', 'power', 'service'];
  dataSource: MatTableDataSource<DeviceData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const devices = [
    {
      id: '0003-4000-800e-000000000004',
      name: 'CH BYD1',
      deviceType: 'LSES',
      site: 'ClayHill',
      group: '',
      maxImport: -13000,
      maxExport: 13000,
      organisation: 'EDF',
      power: 1245,
      service: 'DFR'
      },
    {
      id: '0003-4000-800e-000000000005',
      name: 'CH BYD2',
      deviceType: 'LSES',
      site: 'ClayHill',
      group: '',
      maxImport: -13000,
      maxExport: 13000,
      organisation: 'EDF',
      power: 13542,
      service: 'DFR'
    },
    {
      id: '0003-4000-800e-000000000006',
      name: 'CH BYD3',
      deviceType: 'LSES',
      site: 'ClayHill',
      group: '',
      maxImport: -13000,
      maxExport: 13000,
      organisation: 'EDF',
      power: 1242,
      service: 'DFR'
    }
    ,{
      id: '0003-4000-800e-000000000007',
      name: 'CH BYD4',
      deviceType: 'LSES',
      site: 'ClayHill',
      group: '',
      maxImport: -13000,
      maxExport: 13000,
      organisation: 'EDF',
      power: 95,
      service: 'DFR'
    },{
      id: '0003-4000-800e-000000000008',
      name: 'CH BYD5',
      deviceType: 'LSES',
      site: 'ClayHill',
      group: '',
      maxImport: -13000,
      maxExport: 13000,
      organisation: 'EDF',
      power: 13000,
      service: 'DFR'
    },{
      id: '00000000-0003-4000-8007-000000000002',
      name: 'Willenhall',
      deviceType: 'LSES',
      site: 'Willenhall',
      group: '',
      maxImport: -1100000,
      maxExport: 550000,
      organisation: 'Sheffield Uni',
      power: 550000,
      service: 'SFR'
    },
    {
      id: '0003-4000-800f-000000000001',
      name: 'Alpha ESS',
      deviceType: 'LSES',
      site: 'BB Science Park',
      group: '',
      maxImport: 0,
      maxExport: 50000,
      organisation: 'Total',
      power: 0,
      service: 'Trading'
    },
    {
      id: '0006-4000-8008-000000000000',
      name: 'Gen 1',
      deviceType: 'Generator',
      site: 'Sandy Heath',
      group: 'Generators',
      maxImport: 0,
      maxExport: 50000,
      organisation: 'Arqiva',
      power: 0,
      service: 'Triad'
    },
    {
      id: '0006-4000-8009-000000000000',
      name: 'T 1',
      deviceType: 'Peaker',
      site: 'Spear Street',
      group: 'Test',
      maxImport: 0,
      maxExport: 50000,
      organisation: 'Upside',
      power: 50000,
      service: 'Trading'
    },
    {
      id: '0006-4000-8009-000000000010',
      name: 'Big Gen',
      deviceType: 'Generator',
      site: 'Bacton',
      group: 'Main',
      maxImport: 0,
      maxExport: 5000000,
      organisation: 'Shell',
      power: 5000000,
      service: 'Trading'
    }
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(devices);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  getTypeIcon(type: string) : string {
    if (type === 'LSES'){
      return 'battery_charging_full'
    } 
    else if (type === "Generator") {
      return 'flash_on'
    }
    else {
      return 'help'
    }
  }

getOrgIcon(type: string) : string {
    if (type === 'EDF'){
      return 'https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2017/12/EDF-960x480.jpg'
    } 
    else if (type === "Upside") {
      return 'https://www.powerengineeringint.com/content/dam/pei/online-articles/2018/01/upside.png'
    }
    else if (type === "Arqiva") {
      return 'https://www.tvbeurope.com/wp-content/uploads/2019/01/arqiva.jpg'
    }
    else if (type === "Sheffield Uni") {
      return 'https://upload.wikimedia.org/wikipedia/en/4/44/University_of_Sheffield_coat_of_arms.png'
    }
    else if (type === "Total") {
      return 'https://www.pressandjournal.co.uk/wp-content/uploads/sites/2/2018/07/5b485080a4e2b-372x372.jpg'
    }
    else if (type === "Shell") {
      return 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png'
    }
    else {
      return ''
    }
  }

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */