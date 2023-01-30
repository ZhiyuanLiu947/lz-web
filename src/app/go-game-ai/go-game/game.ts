export class Go{
    public size:number = 5; //the size of the board
    public board:number[][] = []; //the board
    public previousBoard:number[][] = []; //the previous board
    public pMove:boolean = true; //player's turn
    public diedPieces:number[][] = [] //dead pieces empty at begining
    public numMove:number = 0; //The number of moves
    public maxMove:number = this.size * this.size - 1; //the max allowed size
    public komi:number = this.size/2; //the komi rule

    constructor(n:number){
        // Initialize a board with size n*n.
        // :param n: width and height of the board.
        // :return: None.
        this.size = n;
        for (let i = 0; i < this.size; i++) {
            var temp = [];
            for (let j = 0; j < this.size; j++) {
                temp.push(0);
            }
            this.board.push(temp);
        }
        this.previousBoard = this.copyBoard();
    }

    setBoard(pieceType:number, previousBoard:number[][], board:number[][]){
        // Initialize board status.
        // :param previous_board: previous board state.
        // :param board: current board state.
        // :return: None.

        // player pieces marked as 1
        // AI pieces marked as 2
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (previousBoard[i][j] == pieceType && board[i][j] != pieceType){
                    this.diedPieces.push([i, j])
                }
                this.previousBoard[i][j] = previousBoard[i][j];
                this.board[i][j] = board[i][j];
            }
        }
    }

    compareBoard(boardA:number[][], boardB:number[][]){
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (boardA[i][j] != boardB[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    copyBoard(){
        var newBoard = [];
        for (let i = 0; i < this.size; i++) {
            var temp = [];
            for (let j = 0; j < this.size; j++) {
                temp.push(this.board[i][j]);
            }
            newBoard.push(temp);
        }
        return newBoard;
    }

    containPiece(pieceArray:number[][], piece:number[]){
        for (var myPiece of pieceArray){
            if (myPiece[0] == piece[0]){
                if (myPiece[1] == piece[1]){
                    return true;
                }
            }
        }
        return false;
    }

    detectNeighbor(i:number, j:number){
        // Detect all the neighbors of a given stone.

        // :param i: row number of the board.
        // :param j: column number of the board.
        // :return: a list containing the neighbors row and column (row, column) of position (i, j).
        var neighbors = [];
        //Detect borders and add neighbor coordinates
        if (i > 0){
            neighbors.push([i-1, j]);
        } 
        if (i < this.size- 1){
            neighbors.push([i+1, j]);
        } 
        if (j > 0){
            neighbors.push([i, j-1])
        }
        if (j < this.size- 1){
            neighbors.push([i, j+1])
        }
        return neighbors
    }
    
    detectNeighborAlly(i:number, j:number){
        // Detect the neighbor allies of a given stone.

        // :param i: row number of the board.
        // :param j: column number of the board.
        // :return: a list containing the neighbored allies row and column (row, column) of position (i, j).
        var neighbors = this.detectNeighbor(i, j)  // Detect neighbors
        var groupAllies = [];
        for (var pieces of neighbors){
            if (this.board[pieces[0]][pieces[1]] == this.board[i][j]){
                groupAllies.push(pieces);
            }
        }
        return groupAllies
    }

    allyDfs(i:number, j:number){
        // Using DFS to search for all allies of a given stone.

        // :param i: row number of the board.
        // :param j: column number of the board.
        // :return: a list containing the all allies row and column (row, column) of position (i, j).
        var stack = [[i, j]];
        var allyMembers:number[][] = [];
        while(stack.length > 0 && stack){
            var piece = stack.pop();
            if(piece){
                allyMembers.push(piece);
            }
            var neighborAllies: number[][] = [];
            if(piece){
                neighborAllies = this.detectNeighborAlly(piece[0],piece[1]);
            }
            for (var ally of neighborAllies){
                if((!this.containPiece(stack,ally)) && (!this.containPiece(allyMembers, ally))){
                    stack.push(ally);
                }
            }
        }
        return allyMembers;
    }

    findLiberty(i:number, j:number){
        // Find liberty of a given stone. If a group of allied stones has no liberty, they all die.

        // :param i: row number of the board.
        // :param j: column number of the board.
        // :return: boolean indicating whether the given stone still has liberty.
        var allyMembers = this.allyDfs(i, j);
        for (var member of allyMembers){
            var neighbors = this.detectNeighbor(member[0], member[1]);
            for (var piece of neighbors){
                // If there is empty space around a piece, it has liberty
                if (this.board[piece[0]][piece[1]] == 0){
                    return true;
                }
            }
        }
        // If none of the pieces in a allied group has an empty space, it has no liberty
        return false;
    }

    findDiedPieces(pieceType:number){
        // Find the died stones that has no liberty in the board for a given piece type.

        // :param pieceType: 1player or 2AI.
        // :return: a list containing the dead pieces row and column(row, column).
        var diedPieces:number[][] = [];

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.board[i][j] == pieceType){
                    if (!this.findLiberty(i,j)){
                        diedPieces.push([i,j]);
                    }
                }
            }
        }
        return diedPieces;
    }

    removePieces(positions:number[][]){
        // Remove the stones of certain locations.

        // :param positions: a list containing the pieces to be removed row and column(row, column)
        // :return: None.
        for (var pos of positions){
            this.board[pos[0]][pos[1]] = 0;
        }
    }

    removeDiedPieces(pieceType: number){
        // Remove the dead stones in the board.

        // :param pieceType: 1 player or 2 AI.
        // :return: locations of dead pieces.
        var localDiedPieces = this.findDiedPieces(pieceType);
        if (localDiedPieces.length==0){
            return [];
        }
        else{
            this.removePieces(localDiedPieces);
            return localDiedPieces;
        }
    }

    placePiece(i:number, j:number, pieceType:number){
        // Place a chess stone in the board.

        // :param i: row number of the board.
        // :param j: column number of the board.
        // :param pieceType: 1 player or 2 AI.
        // :return: boolean indicating whether the placement is valid.
        var validPlace = this.validPlaceCheck(i,j,pieceType)
        if (!validPlace){
            return false;
        }
        this.previousBoard = this.copyBoard();
        this.board[i][j] = pieceType;
        this.numMove += 1;
        return true;
    }

    validPlaceCheck(i:number,j:number,pieceType:number){
        // Check whether a placement is valid.

        // :param i: row number of the board.
        // :param j: column number of the board.
        // :param pieceType: 1 player or 2 AI.
        // :return: boolean indicating whether the placement is valid.
        if(!(i>=0 && i<this.size)){
            return false;
        }
        if(!(j>=0 && j<this.size)){
            return false;
        }
        if (this.board[i][j] != 0){
            // console.log('Invalid placement. There is already a chess in this position.');
            return false;
        }
        var testGo = new Go(this.size);
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                testGo.board[i][j] = this.board[i][j];
                testGo.previousBoard[i][j] = this.previousBoard[i][j];
            }
        }
        testGo.board[i][j] = pieceType;
        if (testGo.findLiberty(i,j)){
            return true;
        }
        testGo.removeDiedPieces(3-pieceType);
        if (!testGo.findLiberty(i,j)){
            // console.log('Invalid placement. No liberty found in this position.');
            return false;
        }
        else{
            if(this.diedPieces.length>0 && this.compareBoard(this.previousBoard,testGo.board)){
                // console.log('Invalid placement. A repeat move not permitted by the KO rule.');
                return false;
            }
        }
        return true;
    }

    gameEnd(action="MOVE"){
        // Check if the game should end.

        // :param action: "MOVE" or "PASS".
        // :return: boolean indicating whether the game should end.
        if (this.numMove >= this.maxMove){
            return true;
        }
        if (this.compareBoard(this.board, this.previousBoard) && action == "PASS"){
            return true;
        }
        return false;
    }

    score(pieceType:number){
        // Get score of a player by counting the number of stones.

        // :param pieceType: 1 player or 2 AI.
        // :return: boolean indicating whether the game should end.
        var cnt = 0;
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.board[i][j] == pieceType){
                    cnt += 1;
                }
            }
        }
        return cnt;
    }

    judgeWinner(){
        // Judge the winner of the game by number of pieces for each player.

        // :param: None.
        // :return: pieceType of winner of the game (0 if it's a tie).
        var playerScore = this.score(1);
        var aiScore = this.score(2);
        if(playerScore > aiScore + this.komi){
            return 1;
        }
        else if(playerScore < aiScore + this.komi){
            return 2;
        }
        else{
            return 0;
        }
    }
}