// ### ROW VALIDATION ###
// Takes each generated row array and validates each row 
function rowValidation() {
    console.info("Row Validation Initialized")
    // Loop 9 times to validate the 9 rows
    for (let rowNum = 1; rowNum <= 9; rowNum++) {
        // DEBUG
        console.log("Row Number: " + rowNum)

        // Store returned array from rowArray() 		
        var rowCheck = rowArray(rowNum)

        // Validate each row 		
        if (validateArray(rowCheck) != true) {
            console.log("One or more rows invalid")

            // Break loop upon incorrect row and return false 
            return false
        }
    }
    // Return true to caller function if all rows are valid 	
    return true
}
// Returns array of numbers that each row contains 
function rowArray(rowNum) {
    // Create empty array to list rows
    var row = []
    // Loop 9 times for the 9 rows
    for (let colNum = 1; colNum <= 9; colNum++) {

        let cellSelector = $("tbody tr:nth-child(" + rowNum + ") td:nth-child(" + colNum + ")")
        // Create alias for currently selected cell
        let cell = $(cellSelector)

        // Determine which method to use to acquire value of cell (Very Ghetto Method)
        if (cell.html().includes("input")) {
            row.push(parseInt(cell.children().val()))
        } else {
            row.push(parseInt(cell.html()))
        }
    }
    // cell = $("tbody tr:nth-child(1) td:nth-child(1)")

    // Send generated array back to caller function to be validated
    return row
}

// ### COLUMN VALIDATION ###
function colValidation() {
    console.info("Column Validation Initialized")
    // Loop 9 times to validate the 9 columns
    for (let colNum = 1; colNum <= 9; colNum++) {
        // DEBUG
        console.log("Col Number: " + colNum)
        
        // Store returned array from colArray() 
        var colCheck = colArray(colNum)

        // Validate Each Column
        if (validateArray(colCheck) != true) {
            console.log("One or more columns invalid")
            // Break loop upon incorrect column and return false
            return false;
        }
    }
    // Return true to caller if all columns are valid 	
    return true

}

// Returns array of numbers that each column contains 
function colArray(colNum) {
    // Create empty array to list columns
    var col = []
    // Loop 9 times for the 9 columns
    for (let rowNum = 1; rowNum <= 9; rowNum++) {
        // Create alias for currently selected cell
        let cell = $("tbody tr:nth-child(" + rowNum + ") td:nth-child(" + colNum + ")")
        // Determine which method to use to acquire value of cell (Very Ghetto Method)
        if (cell.html().includes("input")) {
            col.push(parseInt(cell.children().val()))
        } else {
            col.push(parseInt(cell.html()))
        }
    }
    // Send generated array back to caller function to be validated
    return col
}

// ### BLOCK VALIDATION ###
function blockValidation() {
    console.info("Block Validation Initialized")
    // Loop 9 times to validate the 9 columns
    for (let blockNum = 1; blockNum <= 9; blockNum++) {
        console.log("Testing block: " + blockNum)
        // Store returned array from colArray() 
        var blockCheck = blockArray(blockNum)

        // Validate Each Column
        if (validateArray(blockCheck) != true) {
            console.log("One or more blocks invalid")

            // Break loop upon incorrect block and return false
            return false
        }
    }
    // Return true to caller if all columns are valid 	
    return true

}

// Returns array of numbers that each block contains 
function blockArray(blockNum) {
    // Create empty array to list values inside each 3x3 block
    let block = []
    // Row in Table (1-9)
    var rowNum = 3 % blockNum;
    // Column in Table (1-9)
    var colNum = blockNum % 3 + 1;
    // DEBUG
    console.log("Row: " + rowNum + " Column: " + colNum);
    // Loop Columns
    for (let x = 3; x > 0; x--) {
        // Loop Rows
        for (let y = 3; y > 0; y--) {
            // Create alias for currently selected cell
            var cell = $("tbody tr:nth-child(" + (rowNum * 3 + y) + ") td:nth-child(" + (colNum * 3 + x) + ")")
            // Determine which method to use to acquire value of cell (Very Ghetto Method)
            if (cell.html().includes("input")) {
                block.push(parseInt(cell.children().val()))
            } else {
                block.push(parseInt(cell.html()))
            }
        }
    }
    return block
}



// ### GENERAL ARRAY VALIDATION  ###
// Checks if all 9 numbers exist without repeats
function validateArray(arrayElement) {
    let validationArray = []


    for (let compareNum = 1; compareNum <= 9; compareNum++) {
        console.log("Testing Number: " + compareNum)
        numCount = 0

        arrayElement.forEach(function(element, index) {
            if (arrayElement[index] == compareNum) {
                numCount++
            }
        });
        validationArray.push(numCount)
    }

    arrayInvalid = validationArray.some(function(arrayElement) {
        return arrayElement != 1
    })
    console.log(validationArray)
    console.log("Array Invalid?: " + arrayInvalid)
    // Actions upon array validation
    if (arrayInvalid) {
        console.log("Array is Invalid")
        return false
    } else {
        console.log("Array is Valid")
        return true
    }
}