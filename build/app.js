"use strict";

var CROSS_URL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNiIgaWQ9InN2ZzIiIHZlcnNpb249IjEuMSIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcyBpZD0iZGVmczQiLz48ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMDM2LjM2MjIpIj48cGF0aCBkPSJtIDIsMTA1MC4zNjIyIDEyLC0xMiIgaWQ9InBhdGgyOTg1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz48cGF0aCBkPSJtIDIsMTAzOC4zNjIyIDEyLDEyIiBpZD0icGF0aDI5ODUtMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+PC9nPjwvc3ZnPg==";
var CIRCLE_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAN0UlEQVR4Xu2ddaxtRxWHv0LxFncKxYpDsOK0gVKguLtDIFBIoLgULy5Bg7S4BytS3KVYcZdgRYJLgVI0X5kDj9d77p49a2afvc/ZK3n/vLvH1vzOzPLZhZk2mgO7bPTq58UzA2DDQTADYAbAhnNgw5c/nwAzADacAxu+/PkEmAGw4RzY8OWv8wlwRuDCwPmBPYFzAGcCzgDsBpwCOHHa/38AfwGOAX4N/BI4Gvgh8F3gG+n/1w4u6wKAkwF7A/sCVwAuA5yt8m79FDgK+BTwEeCzwHGVxxi8uykD4CzADYHrA1cHTjkw9/4EfAB4O3B4OjUGnkJ8uKkBwGP7ZsDtgf2AE8VZUKWHfwLvA14BvBk4tkqvA3QyFQCcB7g3cBfgtAPwJTLEb4DDgOclGSLSV/O2YwfARYGHA7cc0a89d1MULF8DPAH4Zm6job8bKwDODTweuA1M3mHl9fAq4GDgR0NvcNd4YwOA6pm/+PsBSvbrRMoFTweeCChAjoLGBIAbAc8B9hgFZ9pN4sfAgUl7aDdKZs9jAIAGm+cDN8+c87p89voEBA1PK6NVA+BawMsBdfpNpJ8BdwDev6rFrwoAmmAfCzxsVQsf0bj/SgLvYwA1h0FpFQA4PfA6YP9BVzr+wd4N3Br43ZBTHRoA5wOOAC4w5CInNJZOp+sC3x9qzkMCQAfNu5JHbqj1TXGcnwMHAF8cYvJDAeDKafN3H2JRazDG7wEF5E+3XssQAHDz3wOcqvVituhfK5xm2K8A3wZ+ACh5q3ppjPlbanOSND9jBXQja4m8IHBx4EIrskb+Ebhmcj83Y11rAHjsfwgY8pfvZnvVqFrpu5eRETp1ijG4BnAdQP/EUORJYIzDl1oN2BIACnxHDnTna2N/KfBq4DutmJX69WTQR3Fn4JyNx7J7ZYIrtRIMWwFAVc/Nby3tfwx4GvDOFejQ2jKuBzwQ8JprSWoHgqC6itgCADLGI7ilnu/R/lDgwy253qPvqyUnz+V7tOn7qTw1+qmqsagFAA5paOEzLu8ByZCkBW1MJC815Hgi1Y5HXKxT6+mjai66NgBUXbRotaAXAA8G/tCi84p9ngZ4CnD3in0uuhL0agbVfAc1AWDItRJ4bcfOL4A7NgRWg306vkstei8D9HbWJNVY1dMqXsSaAHhDA5fuJ1KfLnqKZC7CG5MaWXP++lK8bsJUCwA3TtGw4Qnt0IFuYo/Rqcfenxw4FLhtTeakkPi3RfusAQDDuLS2ifZa9KQkSI5N0Ctdn+HrTwUOKu1gi3ZGFpn5FAovqwEAY9weUnFhjwb0ja8byevHpZjHWmuT96GYiigAjNf313/SSivyl69+v64kv1UTa50Ef00+C3MYiygKAMOda91tSswmfqzLsb9sQ7wO5FsVIS5lI6klFVEEADpFVPsifSwmrbRvft/UBb7cTVAw/GhKaM1ts+w7PZ7uRVHySWTzzHqpgWL1/EsmN22UGVNqryPJoA/9JlEyJ7HoFCgFgHe/efM1kjONfmllPYwytnV7s5vfWmEQ/QPnLck8KgWAGS41BBnNu/eswIApd/GS5FqOruHJJdpYCQBM0dYpE83StQ/12LHb9qMb09X+dOn+PnPXhx1//1XKqlIzyKYSAJib750TJYMqXhvtZE3amxyi5TNKtwLMOMqmEgC8t4KvX3++AQ7rrvLlboSy1GdSaZvcNlt9Z2CMQSrZ1BcAevo8uqPCnwEUYwnmyGZW4w918xo8GyGFQfco21PYFwA6Z14YmSFgGNc+wT7Wsbl74cl4ueDijFXUqJZFfQFgQaReR8wWs1D1CXuxslY3vY/MkNatHiFrFN00t4M+ALBgg/VvItW4jN5VX60a15a72Al8t2vS5SMhZYbBm9+wyHnYdtl9AHCVdHxH+KiXT2/fTMs5UMO7aq3ErKyiPgCwdIt1eyJkmHjruP3I/MbQ1nCvLwcn8qAUf9DZTR8ARO9/HUeX6JzR/IF78i1grwAr3pTqKXZ20QcAqn+Ru8lIWaN6Z+rmwDNSoazuL7f+wvgA8xs7KRcARrZaQDlC6rlW05ypmwNqWp64EdJUb27htpQLgKsm/3VXf8v+rs/aCUUTNUvHn1o7/QNqXBEyS0nrYhUAaFzQa1VKXx84q7Z0nmNqp7vdBNtSul1Klq0CAFW3SEqSDgodFTPlc+AtgLUTS8nYSmMsqwDgxcDdujrb5u9Gwz4y0H4Tm+rfV50rJYtVW2C7CgCMWtGEW0p3DV4hpeNOuZ2BMhbQLCVNyhbZrgIAHThaAkvJyhqmN8+UzwGPf6+BUvIxC6uaVAHAF1LgZld/y/6eJZGWdr6m7aKal6ZgTcJVAGDIsaVRSuliwNdKG29ou0sBnw+sPcvymmsH0H7v61ulJHis0jVTPgeM9f9q/ucn+NKyMhfpaj8DoItDq/v7qAAwXwHDA2FUV8AsBA4PgFEJgbMaODwAokU3qqqBsyFoeACMyhA0m4KHB0DUFPxc4D5d087VAnQERWL5ssySXZPdsL9HT12rtgiibSkXAHdKtXi7+lv29yydtLTzNW33vRRBXbo8C3eYwl8FANGIYFPALKA4B4R07ch//m7NgOzsniVdmmDiC+dVAGCcudmnEbKKqHmFM3VzoEZImD+4zszr3CvAKf8EOHv33Jd+YZm0iH87MPTkmj4TuG9g1j6MYRGPTuoDANO5rFZdSjqDdArN1H0q6zeJ+F6sTpr1EGcfAFiPzkrgEfL5FWPeZ1rOAXMnoi+E+IaB5eg6qQ8AfBTh4509bv9B9XLnwfmMsXlU/3dN2fEXfQBgMUhDlSOPP1ne1LtpTg7dGno+XmUC7VkDyFTwU2j/e04ffQBgf1E5wD4MdTo8Z3Ib+M0t+pZ42YJH2fe/bfsCwMhgzcIRsihkJL4wMvaY27oXhnHtHZyk9QKzazj1BYCPQviKVbREjFVBfU5upv9x4NoVAmc99q029ttcxvYFgP1a1FGjToRE+hXnIlH/ZaE/KK12l44wNV3RvcL3SwBgeTff54tSlq06OshE2tcqE6furwyQTSUAsNCxVsFojVufgbFQZGcGa/ZqpvmhfNRZFi0Uafb2Hn0LbpcAQDab66+xIUovAu4R7WTi7a3oVVToead1Fz0eUQqAPQHdlT4SGSUdHxY43ES6CWA1jygp/FkQwpO5F5UCwEFUNSwbGyW9jJaL7z356MArbu+PyGBbawFEyXeTfWyjN0UAoF1fB09UJXTSFki0euixvVcwzQaW2vPBCF9Xj5JWVRNAihJvIgBw4hY4VoKtQWoW9mU1kXUmfzC++5flrctgRPGv376jADhX8u6pGdQgiyP5NvC6FpGW38/OydvPZKYnpqX39LEUURQADmrtQGsI1iJdzgevIQjktRU7agbFyHt5VUw1AKB3UD3WN3BqkSeBaua6XAce+8+q+MuXz5aC8+7/c4TpNQDg+Ddo4OEzotXKIlMXDBX41PVr3fmL/a6iPtcCgJNSsOksSdITrdrHrXxdfMf1HK/256p66vk1pP0d56bAbBWwMNUEgEEIFiWIVBPdakEGoVimbmol5s3tO6ySnr8jX7SXWE842+O3HUpqAsBxrElj6Hftfu1bdef+tRYe/uks70DbvjJMDfPuzqMoE+1X87WVFhtl3F9IMt1mc3xkUuHQp1fHJiAq6HksG/4edewsY4EpevK3GrUAgP6BdwAGOLSio9Kr2dYeXrXNQB4aH6H6GvXnb8cvawcbTlcV+C0A4CKsC/zJ5O5tBQL7tRau4c+WU8sKgqw4GQM4vec1XEXDuLqmZa0go7I7M326Otr5760A4DhG/x6ZXrHqO6++3xtboFla1VFmtToV5JcCmMEsmq0j0bu5a7RMv0/sFT8RP6QQuPNYevl8Hs48taHIimZeQR8EDECNSssKdW6Awpe6dyRjpy8PnPu+Sbvq2zbr+5YnwGICFitUM9g9a0b1PzJuQfVUb5k5c54WZt4es0P0jDkPuwG+i+CvWt+6pe38tfvI1SrI417Qfa7l4EMAwPkLAoNJhzwJWvKtdd/+8n1go+nmu4ihAOBYXgfWCx7i3my9QS37985Xg/LUak5DAmAhGBr+ZTDoTCfkgAKsckYTgW8rhg8NAOegiqi0fsCMgP/jgIKr2kV1VW87Pq8CAM5HY5FWrUcMfA2NEXMadnxQU99+VSNPzmJXBYDF3PQdGFxa24GUs/YxfKNjR/Pxyl5SXzUA3AS9iNa027Q3hXTpWscvaqcIAXkMAFgswKASgVAzsijEnEaNFfAOHEsuxJgAIL8NLzO+8CDA18rXiYxs0m9hBk8ojKsmU8YGgMXajKTR7en9WCPvoCbP+valYKefQqF3dJFNYwXAgskmn/j+nepRjTS0vpsX+V7v5CtTJHBR0kZk8Ny2YwfAYh3mH9wrBYlqrx8zmaV7KOC7faNPd5sKABYbrlxgUIQ5iZpLx3Iq+Gs/Iv3ijV08bswI3XFuUwPAjnNXfbRwpf/2X4G3UYudXk4jdfy3UnWuFHBTBsCOazY6x3CsfVKNvMsCCpI1SVey3jnL25jY6ZNuQ0ch1VzP8X2tCwC2YoyuZ336eyXbgtUzLHLlyaHv34SNXVNDN1LVzBgBYwUMPj06Se0GmFjddFAbffWdXtLhOgNgKB5OepwZAJPevvjkZwDEeTjpHmYATHr74pOfARDn4aR7mAEw6e2LT34GQJyHk+5hBsCkty8++RkAcR5Ouod/A79jF5+dNqwtAAAAAElFTkSuQmCC";
var CROSS = 1;
var CIRCLE = 0;
var slides = document.querySelectorAll(".slide");

var slideNo = 0;
var playerChoice = 0;

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
        nextSlide();
    });
    document.getElementById("circle").addEventListener("click", function () {
        playerChoice = CIRCLE;
        nextSlide();
    });
    document.querySelectorAll(".box .content").forEach(function (element) {
        element.addEventListener("click", function () {
            if (!element.classList.contains("background")) {
                if (playerChoice === CROSS) {
                    element.classList.add("background", "cross");
                } else {
                    element.classList.add("background", "circle");
                }
                playerChoice = playerChoice === CROSS ? CIRCLE : CROSS;
            }
        });
    });
};