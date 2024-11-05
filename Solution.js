const data = require('./testcase2.json')  // Read the data from JSON file
console.log(data)


const points = [];

function convertValuesToBase10(data) {    // Decode y values 
    const result = {};
    let i = 0;
    for (const key in data) {
        if (key !== "keys") {
            const x = parseInt(key,10);
            const y = parseInt(data[key].value,parseInt(data[key].base));
            //console.log(`(${x},${y})`);
            const newArray = [x,y];
            points.push(newArray)
        }
    }
}
//console.log(points)
convertValuesToBase10(data);
//console.log(points)


function findConstantTerm(points) {   // Find constant term
    const k = points.length;
    if (k < 1) {
        throw new Error("At least one point is required to find the constant term.");
    }
    let constantTerm = 0;
    for (let i = 0; i < k; i++) {
        const [x_i, y_i] = points[i];
        let L_i = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                const [x_j, _] = points[j];
                L_i *= (-x_j) / (x_i - x_j);
            }
        }
        constantTerm += y_i * L_i;
    }
    return constantTerm;
}


const secret = findConstantTerm(points)
console.log(secret)

//Output for testcases
//Test case 1 : 2.9999999999999982

//Test Case 2 : 79836264464384
