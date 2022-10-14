import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports:[
    ListaComponent
  ]
})
export class ProductosModule { }
