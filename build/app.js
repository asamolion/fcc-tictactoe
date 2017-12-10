"use strict";

var CROSS_URL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNiIgaWQ9InN2ZzIiIHZlcnNpb249IjEuMSIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcyBpZD0iZGVmczQiLz48ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMDM2LjM2MjIpIj48cGF0aCBkPSJtIDIsMTA1MC4zNjIyIDEyLC0xMiIgaWQ9InBhdGgyOTg1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz48cGF0aCBkPSJtIDIsMTAzOC4zNjIyIDEyLDEyIiBpZD0icGF0aDI5ODUtMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+PC9nPjwvc3ZnPg==";
var CIRCLE_URL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNODk2IDM1MnEtMTQ4IDAtMjczIDczdC0xOTggMTk4LTczIDI3MyA3MyAyNzMgMTk4IDE5OCAyNzMgNzMgMjczLTczIDE5OC0xOTggNzMtMjczLTczLTI3My0xOTgtMTk4LTI3My03M3ptNzY4IDU0NHEwIDIwOS0xMDMgMzg1LjV0LTI3OS41IDI3OS41LTM4NS41IDEwMy0zODUuNS0xMDMtMjc5LjUtMjc5LjUtMTAzLTM4NS41IDEwMy0zODUuNSAyNzkuNS0yNzkuNSAzODUuNS0xMDMgMzg1LjUgMTAzIDI3OS41IDI3OS41IDEwMyAzODUuNXoiLz48L3N2Zz4=";

var CROSS = 1;
var CIRCLE = 0;
var slides = document.querySelectorAll(".slide");

var slideNo = 0;
var playerChoice = CIRCLE;
var aiChoice = CROSS;
var playerTurn = true;
var board = [];

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
    document.querySelectorAll(".box .content").forEach(function (element, index) {
        element.addEventListener("click", function () {
            if (!element.classList.contains("background")) {
                if (playerTurn) {
                    element.classList.add("background", playerChoice === CROSS ? "cross" : "circle");
                } else {
                    element.classList.add("background", aiChoice === CROSS ? "cross" : "circle");
                }
                if (playerTurn) {
                    board[index] = playerChoice;
                } else {
                    board[index] = aiChoice;
                }
                playerTurn = !playerTurn;
                console.log(board);
            }
        });
    });
};