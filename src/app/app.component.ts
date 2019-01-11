import { Component } from '@angular/core';

import { FeatureService } from './feature-module/feature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AotProdEnv';
  constructor(private fs: FeatureService) {}

  get config() {
    return JSON.stringify(this.fs.envConfig);
  }

  get production() {
    return this.fs.envConfig.production;
  }
}
