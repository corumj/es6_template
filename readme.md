# Template for ES6 development #
This was developed to support IE11 because I have no choice.

### Instructions ###
#### Setup ####
1. Clone the repository
2. Install ESLint globally `npm install -g eslint`
3. Install dependencies `npm install`

#### You then have three options available: ####
+ npm run dev - Run during development, watches your src directory and compiles the code to the build folder when you save changes
+ npm run buildDev -Run if you need to move compiled code to a dev web server
+ npm run buildProd - Run when you are ready to deploy to production, compiles and minifies code
