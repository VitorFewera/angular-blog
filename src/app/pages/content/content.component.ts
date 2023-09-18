import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  contentPhoto: string = 'https://lumiere-a.akamaihd.net/v1/images/ahsoka-payoff-vertical-nodate_a20eda2a.jpeg';
  contentTitle: string = './assets/img/ashoka.png';
  avaliacao: string = 'Avaliação: TV-14';
  data: string =`Data de lançamento: 22 de agosto de 2023`;
  genero: string = `Gênero: Ação, aventura, ficção científica`;
  descricao: string = `Ambientado após a queda do Império, “Ahsoka” segue a ex-cavaleira Jedi Ahsoka Tano enquanto ela investiga uma ameaça emergente a uma galáxia vulnerável.
  Escrito por Dave Filoni`
}
