import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemDetailRoutingModule } from "./item-detail-routing.module";
import { ItemDetailComponent } from "./item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ItemDetailRoutingModule
    ],
    declarations: [
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemDetailModule { }
