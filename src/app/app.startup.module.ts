import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavMenuComponent,
        HomeComponent
    ],
    exports: [
        NavMenuComponent,
        HomeComponent
    ],
    providers: []
})
export class AppStartupModule {
}
