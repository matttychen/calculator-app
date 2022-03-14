# Description

Basic calculator app that can perform that traditional operations of a simple calculator.

# Technologies

The app uses the following technologies:

- TypeScript and react for the frontend
- Electron for the GUI interface / Desktop application that the app is rendered on
- Jest for unit testing
# My Approach

The total time this app took me would be roughly ~4-5 hours that I spread out throughout the day on Sunday, March 13th.

I first took the time to design how I wanted the calculator application to look like using an application called Sketch.

I then used pen and paper to draw out the logic for the calculator app. First, I identified the three possible states: 
accepting 1st input, accepting 2nd input, and displaying output. I also figured out the flow between these states based
on the different calculator operations that are available.

From there I got started on setting up the electron, react, typescript applciation which uses a boilerplate code 
available online (https://github.com/electron-react-boilerplate/electron-react-boilerplate). I then added the basis of
my code structure and creating a trivial calculator app according to the designs without the logic. After that was done,
I added the logic for the calculator app. 

Other notable libraries that I used was mathjs (https://mathjs.org/index.html) which helps for exact calculations due to
the ECMAScript standard that defines the JS language which causes inaccurate calculations like 0.1 + 0.2 !== 0.3

# Instructions to run and test

First install dependencies: 

`npm i`

Then run the following command to get the app started: 

`npm run start`

To run the unit tests:

`npm run build:renderer` (renderer process for testing to run)
`npm run build:main` (main process for testing to run)
`npm test`

Developer tools is disabled for a better user experience and so if you are looking to enable it:

Search `// DEVELOPER TOOLS:` in the codebase and follow the instructions

# Future Improvements

- Add more visual cues to show that the number is too large and the container has overflown
- Add keyboard option to store memory
- Add more functionality to the calculator (features of scientific calculator)
- Make the dimensions of the calculator more flexible
- Improve default eslint config code styling
- Add end-to-end integration tests
- Add more unit tests



