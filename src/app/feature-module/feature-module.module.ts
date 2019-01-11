import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { EnvConfig } from './env-config';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class FeatureModuleModule {
  static forRoot(env: any): ModuleWithProviders {
    return {
      ngModule: FeatureModuleModule,
      providers: [{ provide: EnvConfig, useValue: env }],
    };
  }
}
