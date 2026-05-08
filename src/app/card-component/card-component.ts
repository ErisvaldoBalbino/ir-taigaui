import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiInput, TuiTitle, TuiAppearance } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-card-component',
  imports: [
    FormsModule, 
    TuiInput, 
    TuiTitle, 
    TuiAppearance, 
    TuiBadge,
    TuiCardLarge,
    TuiHeader
  ],
  templateUrl: './card-component.html',
  styleUrl: './card-component.less',
})
export class CardComponent {
  titulo = input<string>('Título');
  descricao = input<string>('Descrição');
  options = input<{label: string; votes: number}[]>([]);

  onVotarOpcao = output<{label: string; votes: number}>();

  votar(option: { label: string; votes: number }) {
    this.onVotarOpcao.emit(option);
  }
}