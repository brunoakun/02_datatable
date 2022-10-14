import { ITrabajador } from './../_modelos/itrabajador';
import { DatosService } from './../_servicios/datos.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnDestroy, OnInit {
  
  trabajadores: ITrabajador[] = [];
  dtOptions: DataTables.Settings = {}

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  buscando = '';

  constructor(public srvDatos: DatosService) { }

  ngOnInit(): void {

    this.cargaDtOptions();
    this.cargaDatos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  cargaDatos() {
    var aux = this.srvDatos.getPersonajes().subscribe(
      {
        next: respuesta => {
          this.trabajadores = respuesta.lista;
        },
        error: err => console.error('An error occurred', err),
        complete: () => {
          console.log('complete de getPersonajes()');
          this.dtTrigger.next(this.trabajadores);
        }
      }
    );
  }

  cargaDtOptions() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }



  ngAfterViewInit(): void {
    this.cargaDtOptions();
    this.dtTrigger.next(this.trabajadores);
  }




}
