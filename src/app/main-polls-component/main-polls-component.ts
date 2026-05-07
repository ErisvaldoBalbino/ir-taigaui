import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card-component/card-component';
import { TuiButton, TuiInput, TuiTitle, TuiIcon, TuiNotificationService } from '@taiga-ui/core';

@Component({
  selector: 'app-main-polls-component',
  imports: [FormsModule, CardComponent, TuiButton, TuiInput, TuiTitle, TuiIcon],
  templateUrl: './main-polls-component.html',
  styleUrl: './main-polls-component.less',
})
export class MainPollsComponent {
  private readonly notificationService = inject(TuiNotificationService);

  novoTitulo = '';
  novaDescricao = '';
  novasOpcoes: {id: number, value: string}[] = [{id: 1, value: ''}, {id: 2, value: ''}];
  nextId = 3;

  polls: Array<{ titulo: string, descricao: string, options: Array<{label: string, votes: number}> }> = [];

  adicionarOpcaoForm() {
    this.novasOpcoes.push({id: this.nextId++, value: ''});
  }

  removerOpcaoForm(index: number) {
    if (this.novasOpcoes.length > 2) {
      this.novasOpcoes.splice(index, 1);
    }
  }

  criarEnquete() {
    const validOptions = this.novasOpcoes.map(opt => opt.value.trim()).filter(opt => opt.length > 0);
    
    if (!this.novoTitulo.trim() || validOptions.length < 2) {
      this.notificationService
        .open(`Erro: Título ou opções inválidos!`, {appearance: 'negative'})
        .subscribe();
      return;
    }

    this.polls.unshift({
      titulo: this.novoTitulo.trim(),
      descricao: this.novaDescricao.trim(),
      options: validOptions.map(opt => ({ label: opt, votes: 0 }))
    });

    this.novoTitulo = '';
    this.novaDescricao = '';
    this.novasOpcoes = [{id: this.nextId++, value: ''}, {id: this.nextId++, value: ''}];

    this.notificationService
      .open(`Enquete criada com sucesso!`, {appearance: 'positive'})
      .subscribe();
  }

  votarNaEnquete(poll: any, option: any) {
    const opt = poll.options.find((o: any) => o === option);
    if (opt) {
      opt.votes++;
    }
  }

}
