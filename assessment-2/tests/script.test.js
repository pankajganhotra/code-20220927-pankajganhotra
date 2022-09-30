const fs = require("fs")
const { exec } = require("child_process")
const path = require("path");

describe("Calculate BMI on Sample Input tests/input.json", () => {
    it("Should process tests/input.json for BMI and return desired output in tests/output.json", (done) => {
        exec(`node ${path.join(__dirname + "/../script.js")} tests/input.json tests/output.json`, (err, stdout, stderr) => {
            if (err) {
                return console.error(err)
            }
            try {
                let output = fs.readFileSync(path.join(__dirname, "/output.json")).toString()
                output = JSON.parse(output)
                console.log(output)
                if (output.rows.length === 6 && output.overweight_count === 1) {
                    done()
                }
                else done(Error("Invalid Result"))
            } catch (err) {
                done(err)
            }
        })
    })
})


after(() => {
    fs.rmSync(path.join(__dirname, "/output.json"))
})