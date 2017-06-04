import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';

import { AadharCardService } from './aadhar-card.service';
import { AadharCard } from './aadhar-card';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    //providers: sharedConfig.providers
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin }
        ]
})
export class AppModule {
}
