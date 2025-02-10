import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { EstadosSubestadosComponent } from './estados-subestados/estados-subestados.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatChipsModule, MatProgressBarModule, EstadosSubestadosComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontDrakoJT';
  longText = `Este es un ejemplo de la implementacion y manejo de la informacion o texto de un componente de tipo tarjeta en angular.`;
}
