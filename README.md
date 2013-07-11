SPA YouGrade
============

[![Build Status](https://travis-ci.org/emiaj/spa-yougrade.png?branch=master)](https://travis-ci.org/emiaj/spa-yougrade)


Requirements
---------------
- nodejs v0.10.12
- npm 1.2.32
- Ruby 1.9.3p194
- grunt-cli v0.1.7
- grunt v0.4.1
- yo 1.0.0-beta.4
- bower 0.9.2
- phantomjs 1.6.0


**(1) To get grunt-cli, grunt, bower and yo, you could just run "npm install -g yeoman", without the quotes.**



How to build the App
---------------

Open a terminal, cd into the project directory and run:

*npm install && bower install*


How to run the App
---------------
Open a terminal, cd into the project directory and run:

*grunt server*


How to run the App tests
--------------
Open a terminal, cd into the project directory and run:

*grunt test*


How to package the App
--------------
Open a terminal, cd into the project directory and run:

*grunt build*


Backend API
-------------
I wanted to give a try to akka/spray.io and I implemented the backend using these technologies.
You'll need at least sbt installed to build and run the backend API.
The backend API repository can be found here: https://github.com/emiaj/spray-yougrade
Is still under development, and I plan on paying the technical debt regarding unit testing very soon.
To get the backend up and running just clone the repository, cd into it, and run "sbt run".