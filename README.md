INSTRUCTIONS: download this repo and garden-plant-picker-rest-api
-npm install on both
-THEN
-npm start on garden-plant-picker-rest-api/rest-api
-ng serve on garden-plant-picker/my-garden

BUGS: 

  -user can still save a new garden with a already used name

   -if a user chooses not to fill up the entire row there is no way to go to the next row.
      --add a button to skip the current row and start adding to the next one
    
    -print garden layout col 1 is longer than the rest


RIGHT NOW: A user can choose a garden size, add new gardens with at least one plant in them, filter and sort saved gardens.

FUTURE: sign in, get produce yeilds, nice UI/UX

VISION: 
   -single page with a small button in the middle "Get Started" or something
    => animate into home page
   
   -add an image for each veggie inside the popover

TODO: Primary

  -build the math to see how much an optimal garden will produce based on the plants inside
   
  -canSave() method - loads in list of gardenNames, put (gardenNames) inside a ngOnChanges hook
    -re run this function based on the value change of (gardenName)
    -put gardenName inside ngOnChanges function
   
   -create login system on front and backend
   
   -fix hamburger menu in mobil to work
  

UI: Primary

   TODO:
   
    -create content for about the author section
   
    -create a better UI for displaying saved plants from the DB
    
    -update the main banner
      -"layoutshift" hurting performance
    
    --done-create nav bar
      -move highlighted link to current page
      
    --done-create a home page
      -need content
      -step 1 sign up
      
      -step 2 plan a garden
        -get potential yields
        -print out layout
        
      -step 3 plant garden
        -watch virtual progress in real time
          -days to harvest
      
    --done-create a about page
      -need content
      
    
    
    -do these with the Oauth implementation
      -create login page
      -create signup page

   
OTHER: Secondary
  -add user has planted feature, 
    -calculate how much time is left til harvest
    -progress bar or spinner to show how close
      -make the progress spinner change color based on how many days are left
      
  -Optimize







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

