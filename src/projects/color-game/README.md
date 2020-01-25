# Color Game


![project image](https://oliver-gomes.github.io/images/Color-game.gif)
## Table of Contents

* [How to play](#how-to-play)
* [Instructions](#instructions)
* [How I built the Color Game](#how-i-built-the-color-game)



## How to Play
[Click the link here ](https://oliver-gomes.github.io/projects/color-game)

## Instructions
- Observe the RGB no. on top of the page
- One of the square represet the RGB color specified on the header
- Try to guess the color, wrong guess will make the square disappear
- There are two options EASY and HARD mode. EASY mode have 3 squares and HARD mode have 6 total squares


## How I built the Color Game
- created square ul element, made function randomColor() which generates a random RGB color and function generateRandomColors() to generate total of 3 or 6 random color using randomColor() inside it and according to EASY or HARD mode.
- display all the randomly added cards from the ul element
- one of the generated color is picked to be the main finding color and added to the header for visual.
- Added even listener to listen for click events and match the color to the main color if matched, all the squares are turned into that color. If not matched the squares disappears.
- used textContent property to inform the user if the color clicked is CORRECT or TRY AGAIN to keep on finding the right one.
- New Color button was added to generate random colors to all the squares giving new sets of colored square.
- New Color button changes into Play Again button when won, which when clicked resets the whole game
- Reset function was implemented to reset the game and added to play again button click events
- Overall, lot of critical thinking went into the process of making this project come alive. Mostly on making the right function which need to be invoked at the right time to have impact in the game play. Also, spend time on Chrome Developer tool to test out some function and how it's effecting the game and change according to need.

# Hope you enjoy the game ! 