import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  nuevaTarea: string = '';
  tareas: string[] = [];

  agregarTarea() {
    if (this.nuevaTarea.trim() === '') {
      return;
    }

    this.tareas.push(this.nuevaTarea);
    this.nuevaTarea = '';
  }
   borrarTarea(indice: number){
      this.tareas.splice(indice, 1);
   }

}