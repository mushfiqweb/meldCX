# Frontend Candidate Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

| Command | Description | Environment File | Branch |
| -------- | -------- | -------- | -------- |
| **`yarn start`** | Runs the app in the development mode. | `.env.development` | `main` |
| **`yarn build`** | Builds the app for **Production** to the `build` folder. | `.env.production` | `main` |

## Completed User Flow
1. User enters any email address, and password 'meld123'
2. User clicks log in
3. User authenticated and taken to devices screen
4. User presented with up-to-date (polls every 5 seconds) view of active devices
5. User clicks 'notify' to signify completion of the test

## Completed Additional Tasks:
* When user logs in, they should remain logged in until they click "log out", or their browser data is cleared
* If password is incorrect, error message is shown
* On the devices screen, the number of circles shown should equal the number of active devices

## TODO
* On the devices screen, the circles orbit around the number
* UI refinements
* Add test cases
