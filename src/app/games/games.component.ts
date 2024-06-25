import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  wordleLink = 'https://www.nytimes.com/games/wordle/index.html';

  constructor() {
  }

  ngOnInit(): void {
  }

}
