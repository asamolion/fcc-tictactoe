"use strict";

var CROSS_URL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNiIgaWQ9InN2ZzIiIHZlcnNpb249IjEuMSIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcyBpZD0iZGVmczQiLz48ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMDM2LjM2MjIpIj48cGF0aCBkPSJtIDIsMTA1MC4zNjIyIDEyLC0xMiIgaWQ9InBhdGgyOTg1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz48cGF0aCBkPSJtIDIsMTAzOC4zNjIyIDEyLDEyIiBpZD0icGF0aDI5ODUtMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+PC9nPjwvc3ZnPg==";
var CIRCLE_URL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNODk2IDM1MnEtMTQ4IDAtMjczIDczdC0xOTggMTk4LTczIDI3MyA3MyAyNzMgMTk4IDE5OCAyNzMgNzMgMjczLTczIDE5OC0xOTggNzMtMjczLTczLTI3My0xOTgtMTk4LTI3My03M3ptNzY4IDU0NHEwIDIwOS0xMDMgMzg1LjV0LTI3OS41IDI3OS41LTM4NS41IDEwMy0zODUuNS0xMDMtMjc5LjUtMjc5LjUtMTAzLTM4NS41IDEwMy0zODUuNSAyNzkuNS0yNzkuNSAzODUuNS0xMDMgMzg1LjUgMTAzIDI3OS41IDI3OS41IDEwMyAzODUuNXoiLz48L3N2Zz4=";

var CROSS = "X";
var CIRCLE = "O";
var slides = document.querySelectorAll(".slide");

var slideNo = 0;
var playerChoice = CIRCLE;
var aiChoice = CROSS;
var turn = 0;
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var winner = void 0;

slides.forEach(function (element) {
    element.classList.toggle("hidden");
});

function switchSlide() {
    slides.forEach(function (element, index) {
        if (index === slideNo) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    });
}

function nextSlide() {
    slideNo++;
    switchSlide();
}

function prevSlide() {
    slideNo--;
    switchSlide();
}

// winning combinations using the board indices
function winning(board, symbol) {
    var combos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < combos.length; i++) {
        if (board[combos[i][0]] === board[combos[i][1]] && board[combos[i][0]] === board[combos[i][2]] && board[combos[i][0]] === symbol) {
            return combos[i];
        }
        if (i === 8) {
            return false;
        }
    }
}

function emptyIndices(board) {
    return board.filter(function (s) {
        return s !== CIRCLE && s !== CROSS;
    });
}

// the main minimax function
function minimax(newBoard, choice) {
    //available spots
    var availSpots = emptyIndices(newBoard);

    // checks for the terminal states such as win, lose, and tie and returning a value accordingly
    if (winning(newBoard, playerChoice)) {
        return { score: -10 };
    } else if (winning(newBoard, aiChoice)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }

    // an array to collect all the objects
    var moves = [];

    // loop through available spots
    for (var i = 0; i < availSpots.length; i++) {
        //create an object for each and store the index of that spot that was stored as a number in the object's index key
        var move = {};
        move.index = newBoard[availSpots[i]];

        // set the empty spot to the current player
        newBoard[availSpots[i]] = choice;

        //if collect the score resulted from calling minimax on the opponent of the current player
        if (choice == aiChoice) {
            var result = minimax(newBoard, playerChoice);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, aiChoice);
            move.score = result.score;
        }

        //reset the spot to empty
        newBoard[availSpots[i]] = move.index;

        // push the object to the array
        moves.push(move);
    }

    // if it is the computer's turn loop over the moves and choose the move with the highest score
    var bestMove;
    if (choice === aiChoice) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        // else loop over the moves and choose the move with the lowest score
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    // return the chosen move (object) from the array to the higher depth
    return moves[bestMove];
}

window.onload = function () {
    document.getElementById("cross").addEventListener("click", function () {
        playerChoice = CROSS;
        aiChoice = CIRCLE;
        nextSlide();
    });
    document.getElementById("circle").addEventListener("click", function () {
        playerChoice = CIRCLE;
        aiChoice = CROSS;
        nextSlide();
    });
    var boxes = document.querySelectorAll(".box .content");
    boxes.forEach(function (element, index) {
        element.addEventListener("click", function () {
            if (!element.classList.contains("background")) {
                var playerTurn = turn % 2 === 0;
                if (playerTurn) {
                    element.classList.add("background", playerChoice === CROSS ? "cross" : "circle");
                    board[index] = playerChoice;
                } else {
                    element.classList.add("background", aiChoice === CROSS ? "cross" : "circle");
                    board[index] = aiChoice;
                }
                var winningNumbers = winning(board, aiChoice);
                if (winningNumbers) {
                    boxes.forEach(function (element, index) {
                        if (winningNumbers.indexOf(index) != -1) {
                            element.classList.add("red");
                        }
                    });
                    winner = playerTurn ? "PLAYER" : "AI";
                    console.log(winner);
                }

                turn += 1;
            }
        });
    });
};