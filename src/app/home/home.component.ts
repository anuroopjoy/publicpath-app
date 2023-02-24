import { Component, OnInit } from '@angular/core';
import { Loader } from '../loader/loader.interface';

declare var __webpack_public_path__: string;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'lazy-load-app';
  showInfo = false;

  lazyModuleConfig: Loader = {
    loader: () => import('../additional-info/additional-info.component'),
  };

  constructor() {
    __webpack_public_path__ = 'http://localhost:8080/';
  }

  ngOnInit(): void {}

  showAdditionalInfo() {
    this.showInfo = true;
  }
}
