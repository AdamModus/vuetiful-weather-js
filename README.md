# [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/AdamModus/vuetiful-weather-js/blob/master/LICENSE) [![Build Status](https://travis-ci.org/AdamModus/vuetiful-weather-js.svg?branch=master)](https://travis-ci.org/AdamModus/vuetiful-weather-js) [![Coverage Status](https://coveralls.io/repos/github/AdamModus/vuetiful-weather-js/badge.svg?branch=master)](https://coveralls.io/github/AdamModus/vuetiful-weather-js?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/AdamModus/vuetiful-weather-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AdamModus/vuetiful-weather-js?targetFile=package.json) [![DeepScan grade](https://deepscan.io/api/teams/7514/projects/9601/branches/126878/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=7514&pid=9601&bid=126878) [![Netlify Status](https://api.netlify.com/api/v1/badges/62878ff7-09b7-4b29-bfcf-b9a2c34b9253/deploy-status)](https://app.netlify.com/sites/vuetiful-weather-js/deploys)

# Vuetiful Weather JS

[Vuetiful Weather JS](https://vuetiful-weather-js.netlify.com/) is a demo app I've built to help me learn about [Vue](https://vuejs.org/) and that will be used to (hopefully!) help people learn about Vue as well!


## Prerequisites
In this project, I am assuming you already have some basic frontend knowledge and you are familiar with working with javascript. So if terms like `import`, `linting`, `npm` and the such are completely foreign to you, I would recommend you learn with some tutorials and then potentially come back here for it!

I am also assuming you have `Nodejs` and also `yarn` installed on your device. The way I set this project up should work with `npm` as well and if you want to use it, feel free but proceed at your own peril! ⚠️


## Project setup
Just clone this repo and after that run:
```
yarn install
```


## Compiles and hot-reloads for development
If you want to run this project locally, run the following command:
```
yarn serve
```
After this, your terminal should let you know what urls to use to access to check the app. The default for local development is http://localhost:8080.

TODO: DO NOT FORGET TO SET API KEY IN CONFIG FILE!


## Compiles and minifies for production
If you want to build this project for a production like situation, run
```
yarn build
```
This will build the project to a folder called `dist`. All the assets generated from your build will be put here. Depending on what hosting solution you use, you will likely have to point to this folder.

Besides that, there is also a file there called `report.html`. For more information about that, please refer to [Bundle analysis](#bundle-analysis)


## Run your unit tests
In order to run all unit tests, please run:
```
yarn test:unit
```
All unit tests are written with Jest and [vue-test-utils](https://github.com/vuejs/vue-test-utils).
Everytime the unit tests are run, a coverage report is done. To learn more about this, please refer to [Unit test coverage reports](#unit-test-coverage-reports).


## Run your end-to-end tests
To run the e2e tests, run the following command.
```
yarn test:e2e
```
The e2e tests are run using [Cypress](https://www.cypress.io/).


## Lints and fixes files
For linting, this is the correct command.
```
yarn lint
```


## Bundle analysis
Everytime you build the app for production, a folder called `dist` is created. Inside that folder, there is a file `report.html`. If you open that file with your browser of choice, you will be able to see a detailed report about the bundle size and composition of the just built app.
These reports all use an extremely tool called [Webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer/). I would definitely recommend learning more about it, if you haven't yet!

On top od that, if you want to just see the coverage report without have to build the app and open the file manually, you can also run the command.
```
yarn bundle-analyzer
```
This will not only build the app, but also generate two reports instead of one: `legacy-report.html` and `modern-report.html`. This is because the app is built seperately for legacy browsers and for modern browsers. Right after the app is built, your default browser will open two new tabs, one for each version. There you will be able to analyze all the details of your bundles to your hearts content!


## Unit test coverage reports
When the unit tests are run, Jest will automatically generate a coverage report. This report will be in the folder `coverage`. To check out locally what the unit test coverage is locally, you can just open the file `index.html`.
This will give you very useful information about what lines of code are and are not covered by unit tests.
