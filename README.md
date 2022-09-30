# Assessment 1 | Rental Website USING React js
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Assessment 2 | BMI CALCULATOR USING Node js

BMI-Body Mass Index Calculator:

This is a Node js Application which takes a file as input containing Array of Perssn
and calculates BMI , BMI Category and BMI Health Risk based on Input.
It also returns the count of Overweight Person.

> BMI = kg/m2

## HOW TO INSTALL?

1.Install Node above 13.XX and test using the CMD below.
   Using the link below
   
  >https://nodejs.org/en/download/
   
   Check the version using the CMD
   
   >node -v

Install the module required by running the CMD below

>npm install

Example Test Case (Will test on tests/input.json)

>npm run test

Run the node js file by using the CMD below (Provide File Path for Input and Output)

>node script.js path/to/input.json  /path/to/output.json

Example:
```
input.json
┌─────────┬──────────┬──────────┬──────────┐
│ (index) │  Gender  │ HeightCm │ WeightKg │
├─────────┼──────────┼──────────┼──────────┤
│    0    │  'Male'  │   171    │    96    │
│    1    │  'Male'  │   161    │    85    │
│    2    │  'Male'  │   180    │    77    │
│    3    │ 'Female' │   166    │    62    │
│    4    │ 'Female' │   150    │    70    │
│    5    │ 'Female' │   167    │    82    │
└─────────┴──────────┴──────────┴──────────┘
output.json
{
    "overweight_count" : 1,
    "rows":
┌─────────┬──────────┬──────────┬──────────┬────────────────────┬────────────────────┬─────────────────────┐
│ (index) │  Gender  │ HeightCm │ WeightKg │        BMI         │    BMICategory     │     HealthRisk      │
├─────────┼──────────┼──────────┼──────────┼────────────────────┼────────────────────┼─────────────────────┤
│    0    │  'Male'  │   171    │    96    │ 32.83061454806607  │ 'Moderately obese' │   'Enhanced risk'   │
│    1    │  'Male'  │   161    │    85    │ 32.79194475521777  │ 'Moderately obese' │   'Enhanced risk'   │
│    2    │  'Male'  │   180    │    77    │ 23.76543209876543  │  'Normal weight'   │ 'Malnutrition risk' │
│    3    │ 'Female' │   166    │    62    │ 22.49963710262738  │  'Normal weight'   │ 'Malnutrition risk' │
│    4    │ 'Female' │   150    │    70    │ 31.11111111111111  │ 'Moderately obese' │   'Enhanced risk'   │
│    5    │ 'Female' │   167    │    82    │ 29.402273297715947 │    'Overweight'    │     'Low risk'      │
└─────────┴──────────┴──────────┴──────────┴────────────────────┴────────────────────┴─────────────────────┘
}
```
