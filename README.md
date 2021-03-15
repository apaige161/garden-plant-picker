INSTRUCTIONS: download this repo and garden-plant-picker-rest-api
-npm install on both
-THEN
-npm start on garden-plant-picker-rest-api/rest-api
-ng serve on garden-plant-picker/my-garden

BUGS: 
  --local host wont load
  -user has to click refresh plants after adding a new garden to see it in the list of gardens and to see any gardens to filter from
  -progress bar works for a 4x8 garden but not anything else. But why though!?
  -error mess in console... "ERROR TypeError: Cannot read property 'forEach' of undefined
    at Main2Component.getEachGardenNameOnce"


RIGHT NOW: A user can look at only his or her saved garden beds, along with adding more.

FUTURE: sign in, get produce yeilds, nice UI/UX

TODO: Primary
  
  test "calculateProgress()"
  disable add button when a garden is full --inside "calculateProgress()"
  
  button to reset the propossed garden

  wrap list of plants(to choose from) to the next column 2-4 columns

  build the math to see how much an optimal garden will produce based on the plants inside
   
  split main2 into 2 separate components, move the saved gardens to another page?
   
   
  

UI: Secondary
   single page with a small button in the middle "Get Started" or something
   => animate into home page
   add an image for each veggie inside the popover

   
OTHER: Secondary
  add in potential yields for each crop
  add buttons with functions to calculate: total yield, per plant?, yield by plant, etc








# MyGarden

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# garden-plant-picker

