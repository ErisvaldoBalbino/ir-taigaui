import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MainPollsComponent } from './main-polls-component/main-polls-component';
import { TuiRoot, TuiButton, TuiIcon, TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, MainPollsComponent, TuiButton, TuiIcon],
  templateUrl: './app.html',
  styleUrl: './app.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}