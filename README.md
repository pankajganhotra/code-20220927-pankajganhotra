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
