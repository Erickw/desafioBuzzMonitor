import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/models/user';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface BrandData {
  id: string;
  brand: string;
  progress: string;  
}

// Mock data for brands table

const BRANDS: string[] = ['Habbibs', 'Bradesco', 'Buger King', 'Cacau Show', 'Claro', 'Bacio di Latte',
  'Acuvue', 'Firjan', 'Getnet', 'Globo', 'Trigo', 'GuiaBolso',
  'Honda', 'JBS', 'Localiza', 'Melissa', 'Oi'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'brand', 'consumed', 'pause'];
  dataSource: MatTableDataSource<BrandData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  title = 'desafio';
  mycheckbox = true;

  user: User = {
    id: '11231232321093@buzzmonitor.com.br',
    name: 'teste',
    activation_state: 'Activated',
    account_type: 'admin',
    projects_limit: 715,
    posts_per_month: 878,
    analytics_limit: 150,
    CRM_limit: 123,
    unlimited_posts: false,
    unlimited_analytics: false,
    unlimited_CRM: false,
    unlimited_projects: false,
    pause_collect: false,
    unlimited_crawling: false,
    crawling_quota: 58
  };

  constructor(public dialog: MatDialog) {
    // Create 100 brands
    const users = Array.from({ length: 100 }, (_, k) => this.createNewBrand(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

  createNewBrand(id: number): BrandData {
    const brand =
      BRANDS[Math.round(Math.random() * (BRANDS.length - 1))] + ' ' +
      BRANDS[Math.round(Math.random() * (BRANDS.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      brand: brand,
      progress: Math.round(Math.random() * 100).toString(),      
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onCheck(e, label) {
    switch (label) {
      case label = "unlimited_projects": {
        if (e.target.checked) {
          this.user.unlimited_projects = true;
        }
        else {
          this.user.unlimited_projects = false;
        }
        break;
      }
      case label = "unlimited_posts": {
        if (e.target.checked) {
          this.user.unlimited_posts = true;
        }
        else {
          this.user.unlimited_posts = false;
        }
        break;
      }
      case label = "unlimited_analytics": {
        if (e.target.checked) {
          this.user.unlimited_analytics = true;
        }
        else {
          this.user.unlimited_analytics = false;
        }
        break;
      }
      case label = "unlimited_CRM": {
        if (e.target.checked) {
          this.user.unlimited_CRM = true;
        }
        else {
          this.user.unlimited_CRM = false;
        }
        break;
      }
      case label = "unlimited_crawling": {
        if (e.target.checked) {
          this.user.unlimited_crawling = true;
        }
        else {
          this.user.unlimited_crawling = false;
        }
        break;
      }
    }
  }
}



