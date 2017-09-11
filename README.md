## Website Performance Optimization

This is a project for my Udacity Front-End Web Development Course.
The goal is to score above 90 on Google PageSpeed Insights.

### Instructions for Use

* Download the original project at https://github.com/udacity/frontend-nanodegree-mobile-portfolio
* Open index.html in the browser
* Cut and paste the web address into https://developers.google.com/speed/pagespeed/insights/
* Click the "Analyze" button

#### index.html Optimizations

* Minified JS/CSS/html files
* Used Web Font Loader library to avoid render blocking
* Reduced image sizes
* Inlined CSS to avoid render blocking
* Added async to js script files

#### main.js Optimizations

* Reduced the number pizzas created to 40 in last function in main.js
* Replaced all querySelector with getElementById
* Replaced all querySelectorAll with getElementsByClassName
* Used requestAnimationFrame to move pizzas in the background
* Used code from html5rocks.com to only use requestAnimationFrame on recent scrolls
* Placed variable newWidth and dx outside of the loop
* Placed document.getElementsByClassName("randomPizzaContainer") into the variable container, outside the loop
* Placed document.getElementById("randomPizzas") into the variable pizzasDiv, outside of the loop

#### style.css Optimizations

* Added transform: translateZ(0) to the .mover class to trigger hardware acclerated CSS

#### images Optimization

* Minified pizzeria image using Grunt (saved 365 kb - 15.4%)
* Created a 100px pizzera image for index.html
