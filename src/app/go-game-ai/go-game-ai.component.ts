import { Component,OnInit } from '@angular/core';
import { Go } from './go-game/game';
import { RandomPlayer } from './go-game/randomPlayer';

@Component({
  selector: 'app-go-game-ai',
  templateUrl: './go-game-ai.component.html',
  styleUrls: ['./go-game-ai.component.css']
})
export class GoGameAiComponent implements OnInit{

    public blockClass: string[][] = [];
    public validPlacesForPlayer: boolean[][] = [];
    public allowPlayerMakeMove: boolean = true;
    public myGo: Go = new Go(5);
    public myAiPlayer: RandomPlayer = new RandomPlayer();

    ngOnInit(){
        this.blockClass = [
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"],
            ["block-able","block-able","block-able","block-able","block-able"]
        ];
        this.validPlacesForPlayer = [
            [true,true,true,true,true],
            [true,true,true,true,true],
            [true,true,true,true,true],
            [true,true,true,true,true],
            [true,true,true,true,true]
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

    makeMove(i:number, j:number){
        console.log("Player clicked.");
        this.allowPlayerMakeMove = false;
        if (this.validPlacesForPlayer[i][j]){
            console.log("Player try to make move.");
            var placeSuccess = this.myGo.placePiece(i,j,1);
            if (!placeSuccess){
                //This part should never be runned!!!!
                console.log("Player make move failed.");
                alert("cant have a move");
                this.allowPlayerMakeMove = true;
            }
            console.log("Player make move success.");
            this.blockClass[i][j] = "block-player";
            this.validPlacesForPlayer[i][j] = false;
            //Check if player killed any ai pieces
            console.log("Check if player killed any ai pieces.");
            var diedPieces = this.myGo.removeDiedPieces(2);
            if (diedPieces.length>0){
                for (var piece of diedPieces){
                    this.blockClass[piece[0]][piece[1]] = "block-ai-die";
                    this.blockClass[piece[0]][piece[1]] = "block-able";
                    this.validPlacesForPlayer[piece[0]][piece[1]] = true;
                }
            }
            //Check if game ended
            console.log("Check if game ended for player.");
            if (this.myGo.gameEnd()){
                var winner = this.myGo.judgeWinner();
                if (winner == 1){
                    alert("You win!");
                }
                else if (winner == 2){
                    alert("Ai win!");
                }
                else{
                    alert("Draw!");
                }
                // TODO: ask if restart
                return;
            }
            //If not end, let ai make move
            console.log("AI try to make move.");
            var aiMove = this.myAiPlayer.aiPlayerMakeMove(this.myGo,2);
            if (aiMove.length>0){
                placeSuccess = this.myGo.placePiece(aiMove[0],aiMove[1],2);
                if (!placeSuccess){
                    //This part should never be runned!!!!
                    console.log("Ai make move failed.");
                    alert("Ai made a bad move!");
                    this.allowPlayerMakeMove = true;
                }
                console.log("Ai make move success.");
                this.blockClass[aiMove[0]][aiMove[1]] = "block-ai";
                this.validPlacesForPlayer[aiMove[0]][aiMove[1]] = false;
                //Check if ai killed any player pieces
                console.log("Check if ai killed any player pieces.");
                var diedPieces = this.myGo.removeDiedPieces(1);
                if (diedPieces.length>0){
                    for (var piece of diedPieces){
                        this.blockClass[piece[0]][piece[1]] = "block-player-die";
                        this.blockClass[piece[0]][piece[1]] = "block-able";
                        this.validPlacesForPlayer[piece[0]][piece[1]] = true;
                    }
                }
            }
            else{
                console.log("Ai passed.");
            }
            //Check if game ended
            console.log("Check if game ended for ai.");
            if (this.myGo.gameEnd()){
                var winner = this.myGo.judgeWinner();
                if (winner == 1){
                    alert("You win!");
                }
                else if (winner == 2){
                    alert("Ai win!");
                }
                else{
                    alert("Draw!");
                }
                // TODO: ask if restart
                return;
            }
            //If not ended, update validPlacesForPlayer for player, and add visual indicator
            console.log("Update visual indicator.");
            for (let ii = 0; ii < 5; ii++) {
                for (let jj = 0; jj < 5; jj++) {
                    if (this.myGo.board[ii][jj] == 0){
                        this.blockClass[ii][jj] = "block-able";
                        this.validPlacesForPlayer[ii][jj] = true;
                        if (!this.myGo.validPlaceCheck(ii, jj, 1)){
                            this.blockClass[ii][jj] = "block-unable";
                            this.validPlacesForPlayer[ii][jj] = false;
                        }
                    }
                    
                }
            }
            //Then allow player to make move
            console.log("Allow player make next move.");
            this.allowPlayerMakeMove = true;
        }
        
    }

    makeMovePass(){

    }

}
