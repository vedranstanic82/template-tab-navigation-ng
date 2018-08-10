import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BrowseComponent } from "./browse/browse.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";

export const COMPONENTS = [BrowseComponent, HomeComponent, SearchComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//browseTab:browse//searchTab:search)", pathMatch: "full" },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "browse", component: BrowseComponent, outlet: "browseTab" },
    { path: "search", component: SearchComponent, outlet: "searchTab" },

    { path: "item/:id", outlet: "homeTab", loadChildren: "./item-detail/item-detail.module#ItemDetailModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
