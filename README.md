# Sportsee - Front-end

This repo contains all the source code to run the sports analytics SportSee front-end.

## Project

### 1. Prerequisites

- [Yarn](https://yarnpkg.com/)

### 2. Launching the project

- Fork, clone on your computer and run first the Sportsee front-end dashboard. You can find the repo here [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard). The dashboard will run on port [http://localhost:3000](http://localhost:3000)
- Fork this repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn start` command will allow you to run the Sportsee app front-end.
- In a new terminal, launch the fake server (from json server) with mocked data by running the command `yarn start-mock`. You can see the data on port [http://localhost:3500](http://localhost:3500) as :
  - The USER MAIN DATA :[http://localhost:3500/USER_MAIN_DATA](http://localhost:3500/USER_MAIN_DATA)
  - The USER ACTIVITY data : [http://localhost:3500/USER_ACTIVITY](http://localhost:3500/USER_ACTIVITY)
  - The USER AVERAGE SESSIONS data : [http://localhost:3500/USER_AVERAGE_SESSIONS](http://localhost:3500/USER_AVERAGE_SESSIONS)
  - The user PERFORMANCE data : [http://localhost:3500/USER_PERFORMANCE](http://localhost:3500/USER_PERFORMANCE)

**Warning, currently only two users have been mocked from the file ``data/data.json`` and from the API front-end Dashboard. They have userId 12 and 18 respectively.**

- You can toggle between API and mocked data by changing the value of the constant `mock` at the top of the file `src/service/http-common.js`

### 3. Available Scripts

You can run Sportsee front-end with :

### `yarn start`

Runs the app in the development mode.

The Sportsee front-end will run on port [http://localhost:3001](http://localhost:3001)

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
