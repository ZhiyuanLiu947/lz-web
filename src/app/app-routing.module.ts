import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { UiThemeListComponent } from "./ui-theme-list/ui-theme-list.component";

const routes: Routes = [
    { path: "", redirectTo: "/about", pathMatch: "full" },
    { path: "about", component: AboutComponent },
    { path: "projects", component: ProjectListComponent },
    { path: "themes", component: UiThemeListComponent },
    { path: "404", component: PageNotFoundComponent },
    { path: "", redirectTo: "/404", pathMatch: "prefix" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AboutComponent, ProjectListComponent, UiThemeListComponent, PageNotFoundComponent]