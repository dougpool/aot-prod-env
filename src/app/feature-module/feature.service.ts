import { Injectable, Optional } from '@angular/core';

import { EnvConfig } from './env-config';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  _config;
  constructor(@Optional() config: EnvConfig) {
    console.log('FeatureService config ', config);
    this._config = config;
  }

  get envConfig() {
    return this._config;
  }

}
