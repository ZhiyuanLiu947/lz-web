import { Go } from "./game";

export class RandomPlayer{
    aiPlayerMakeMove(goGame:Go, pieceType=2){
        var possibleMovements:number[][] = [];
        for (let i = 0; i < goGame.size; i++) {
            for (let j = 0; j < goGame.size; j++) {
                if (goGame.validPlaceCheck(i, j, pieceType)){
                    possibleMovements.push([i,j]);
                }
            }
        }
        if (possibleMovements.length==0){
            return [];
        }
        else{
            var randomMove = possibleMovements[Math.floor(Math.random() * possibleMovements.length)];
            return randomMove;
        }
    } 
}