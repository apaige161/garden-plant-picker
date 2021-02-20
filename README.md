
RIGHT NOW: App just has crud operation on a single plant, boring right? Well when I have time I want to be able to aggregate these single plants together to store "raised garden beds" designs. Even later: A.) a user will be able to sign in and look at only his or her saved garden beds, along with adding more of course. OR B.)Show an idea of what the user is going to yied with the current garden/s

IDEALLY: All of these things will come to life around a grand UI

WRITTEN BUT NOT IMPLEMENTED: [main.component.ts]This application displays a list of plants on the left and you can add these to another list on the right (plants to go in garden, staged). Think about how you get code on github. ADD things(array of plants) to a staging area, COMMIT list of plants to a larger conatiner.Repeat as nessecesary. And PUSH the final product(multiple arrays to be saved(not wired up to the DB yet) ).


TODO: Primary
  create a user object to store "virtual gardens" in....  => give each plant an attribute of the gardens name to be able to sort by that later
  search functionality, filter() map() find()?
  form validation on plant-api.component.ts
  break code into more components
  work on routing
  
  
  implement NgOnChange or figure out how to reload the plant list after every submit or change of list


UI: Secondary
   single page with a small button in the middle "Get Started" or something
   => animate into home page
   add an image for each veggie inside the popover
   set up grid for the plants in garden to look like an actual square foot garden
   
OTHER: Secondary
  add in potential yields for each crop
  add buttons with functions to calculate: total yield, per plant?, yield by plant








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

