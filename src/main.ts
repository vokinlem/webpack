import {NgModule} from '@angular/core';
import AppComponent from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

export default class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
