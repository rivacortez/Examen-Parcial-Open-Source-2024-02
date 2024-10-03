import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarContentComponent } from './public/components/toolbar-content/toolbar-content.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eventify';

  constructor(private translate: TranslateService) {

    const browserLang = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');

  }
}
