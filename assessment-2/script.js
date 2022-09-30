const JSONStream = require("JSONStream")
const fs = require("fs");
const path = require("path")
const es = require("event-stream")

//Constants
const BMI_CATEGORY_LIST = ["UnderWeight", "NormalWeight", "OverWeight", "Moderately Obese", "Severly Obese", "Very Severly Obese"]
const BMI_RISK_LIST = ["Malnutrition", "Low Risk", "Enhanced Risk", "Medium Risk", "High Risk", "Very High Risk"]
const BMI_RANGE = [18.5, 24.9, 29.9, 34.9, 39.9];

// I/O Files
const inputFile = process.argv[2]
const outputFile = process.argv[3] || "./output.json";

const inputFilePath = path.join(__dirname + "/" + inputFile);
const outputFilePath = path.join(__dirname + "/" + outputFile)

if (!inputFile) {
    throw Error("No Input FileName Provided")
}

if (!fs.existsSync(inputFilePath)) {
    console.log(inputFile)
    throw Error(inputFilePath + "Input File doesn't exist")
}

try {
    //Parse Streamed JSON
    const inputStream = fs.createReadStream(path.join(__dirname + "/" + inputFile)).pipe(JSONStream.parse("."))
    if (!inputStream) return
    const outputStream = fs.createWriteStream(path.join(__dirname + "/" + outputFile))
    outputStream.write(`{"rows":`)
    let overweight_count = 0;
    inputStream
        .pipe(es.mapSync(calculateBMIInfo))
        .pipe(es.mapSync(item=>{
            if (item.bmi_category === 'OverWeight') overweight_count++;
            return item;
        }))
        .pipe(JSONStream.stringify())
        .pipe(es.mapSync(d => {
            outputStream.write(d)
        }))
        .on("end", () => {
            outputStream.write(`,"overweight_count":${overweight_count}}`)
        })
} catch (err) {
    throw (Error(err))
}


function calculateBMIInfo(item) {
    let height = item.HeightCm;
    let weight = item.WeightKg;
    //Convert Height To Metre
    height = (height / 100).toFixed(2)

    //Calculate BMI
    item.bmi = (weight / (height * height)).toFixed(2)
    //Calculate BMI Category and Health Risk
    // (Keeping Highest/last Value as Initial)
    item.bmi_category = BMI_CATEGORY_LIST[0]
    item.bmi_health_risk = BMI_RISK_LIST[0]
    BMI_RANGE.map((limit, i) => {
        if (item.bmi > limit) {
            item.bmi_category = BMI_CATEGORY_LIST[i + 1]
            item.bmi_health_risk = BMI_RISK_LIST[i + 1]
        }
    })
    return item
}


