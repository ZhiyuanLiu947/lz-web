import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent{
    public sideButton = ["side-button-active", "side-button", "side-button", "side-button", "side-button"];
    
    //HiddenTags = algorithms, applications, games, ui
    public showAll = false;
    public hiddenTags = [false,false,false,false];

    showProjects(type:number){
        this.sideButton = ["side-button", "side-button", "side-button", "side-button", "side-button"];
        this.sideButton[type] = "side-button-active";

        if (type == 0){
            this.showAll = false;
            this.hiddenTags = [false,false,false,false];
        }
        else{
            this.showAll = true;
            this.hiddenTags = [true,true,true,true];
            this.hiddenTags[type-1]=false
        }
    }
}
