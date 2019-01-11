import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { FeatureModuleModule } from './feature-module/feature-module.module';

const env = environment;
console.log('ng environment ', env);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureModuleModule.forRoot(env)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
