import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-go-game-ai',
  templateUrl: './go-game-ai.component.html',
  styleUrls: ['./go-game-ai.component.css']
})
export class GoGameAiComponent implements OnInit{

    public blockClass: Array<Array<string>> = [];

    ngOnInit(){
        this.blockClass = [
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"]
        ];
        
    }

    //if player able to make move at current position
    //this.blockClass[x][y] = "block-able";

    //if player cant make move at current position
    //this.blockClass[x][y] = "block-unable";

    //if player make a move
    //this.blockClass[x][y] = "block-player";

    //if player's chess died
    //this.blockClass[x][y] = "block-player-die";

    //if ai make a move
    //this.blockClass[x][y] = "block-ai";

    //if ai's chess died
    //this.blockClass[x][y] = "block-ai-die";

    makeMove(x:number, y:number){
        this.blockClass[x][y] = "block-player";
    }

}
