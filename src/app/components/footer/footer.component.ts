import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  starWars: string = 'https://www.starwars.com/'
  link: string = 'https://www.linkedin.com/in/vitor-hugo-lopes-ferreira-524b0923a/';
  github: string = 'https://github.com/VitorFewera';
  dio: string = 'https://web.dio.me/home';
}
