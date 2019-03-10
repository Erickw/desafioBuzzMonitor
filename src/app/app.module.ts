import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatTabsModule, MatInputModule,  MatDialogModule, MatTableModule, MatSortModule, MatTableDataSource, MatPaginatorModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatCheckboxModule,
    MatTabsModule,    
    MatInputModule,
    MatDialogModule,     
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule 
  ],
  entryComponents:[
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
