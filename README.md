# Smartphone calculator
A calculator with styling and functionality similar to one found in smartphones, featuring a realtime clock and digits that resize automatically to fit the display.
It also has functionality using only keyboard inputs.

Link: https://solidwake.github.io/project-calculator/

![Screen Shot 2022-06-15 at 11 26 54 PM](https://user-images.githubusercontent.com/69250073/173987156-484b5733-7a83-495f-ac37-8e64ffb2192b.png)

## How its made
### Tech used: HTML, CSS, JavaScript
The number button variables are placed into an array so they can be looped through, and a function is called on each index to add an event listener to each button. Variable names and parameters explicitly state the data type (number or string) to avoid errors from type coercion.

Supports input of up to 9 comma separated digits, and able to display up to 18 comma separated digits after calculation. Digits are resized dynamically based on the number of digits in the display. Numeric, arithmetic, enter and escape keys can be used for inputs and calculation. Contains a real time clock.

Styled using CSS Grid.

## To be done:
Make it more responsive. It fits into a window on mobile, but size should adjust and it should be centered.
