import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Implement dark/light theme
  backgroundMode: string = 'light-mode';
  constructor() {

  }
  ngOnInit() {

  }




}
