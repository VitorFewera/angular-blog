import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  video: string = 'https://www.starwars.com/video';
filmes: string = 'https://www.starwars.com/films';
series: string = 'https://www.starwars.com/series';
interacoes: string = 'https://www.starwars.com/interactive';
dados: string = 'https://www.starwars.com/databank'
disney: string = 'https://www.disneyplus.com/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA'

}
