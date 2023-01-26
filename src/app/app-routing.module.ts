import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { InProgressPageComponent } from "./in-progress-page/in-progress-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectProjectCodexComponent } from "./project-project-codex/project-project-codex.component";
import { SequenceMatchingComponent } from "./sequence-matching/sequence-matching.component";
import { UiShakingBottleComponent } from "./ui-shaking-bottle/ui-shaking-bottle.component";

const routes: Routes = [
    { path: "", redirectTo: "/about", pathMatch: "full" },
    { path: "about", component: AboutComponent },
    { path: "projects", component: ProjectListComponent },
    { path: "projects/sequence-matching", component: InProgressPageComponent},
    { path: "projects/yelp-business-search", component: InProgressPageComponent},
    { path: "projects/go-game-ai", component: InProgressPageComponent},
    { path: "projects/project-codex", component: InProgressPageComponent},
    { path: "projects/shaking-bottle", component: UiShakingBottleComponent},
    // { path: "projects/sequence-matching", component: SequenceMatchingComponent},
    // { path: "projects/project-codex", component: ProjectProjectCodexComponent},
    { path: "projects/404", component: PageNotFoundComponent},
    { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    AboutComponent, 
    ProjectListComponent, 
    PageNotFoundComponent,
    InProgressPageComponent,
    SequenceMatchingComponent, 
    ProjectProjectCodexComponent,
    UiShakingBottleComponent]