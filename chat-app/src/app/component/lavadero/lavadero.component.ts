import { Component } from '@angular/core';
import { HorarioService } from 'src/app/services/horario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente-reservas',
  templateUrl: './lavadero.component.html',
  styleUrls: ['./lavadero.component.scss'],
    
})

export class LavaderoComponent {

  horasDisponibles: string[] = [];
  miFormulario: FormGroup;

  constructor(private horarioService: HorarioService, private fb: FormBuilder) { 
    this.miFormulario = this.fb.group({
      id_lavadero: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.horarioService.horasD$.subscribe(horas => {
      this.horasDisponibles = horas.slice();
    });

    this.actualizarHorario();

  }

  seleccionarHora(hora: string){
    let object = {
      id_lavadero :'641344c2a4489bbd6bd9e90f',
      fecha : '2023-03-20',
      hora
    }
    this.horarioService.reservar(object)
    this.actualizarHorario();
  }

  actualizarHorario(){
    let id_lavadero = '641344c2a4489bbd6bd9e90f';
    let fecha = '2023-03-20'
    let object = {id_lavadero, fecha}
    this.horarioService.listarHorario(object);
  }
}
