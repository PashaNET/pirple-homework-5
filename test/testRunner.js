//Dependencies
const unitTests = require('./unitTests'),
      apiTests = require('./apiTests');


//list of tests which will be runned
let tests = {
    unit: unitTests,
    api: apiTests
};


countTests = () => {
    let testQuantity = 0,
        testGroupKeys = Object.keys(tests);

    testGroupKeys.forEach(element => {
        testQuantity += Object.keys(tests[element]).length;
    });

    return testQuantity;
}

showTestRunnerReport = (errors, successes, limit) => {
    console.log("");
    console.log("=====================TEST REPORT=====================");
    console.log("");
    console.log("Total: ", limit);
    console.log("Pass: ", successes);
    
    let errorQuanitity = errors.length;
    
    console.log("Fail: ", errors.length);
    console.log("");

    if(errorQuanitity > 0){
        console.log("=====================Error details=====================");
        console.log("");

        errors.forEach(element => {
            console.log('\x1b[31m%s\x1b[0m', element.name);
            console.log(element.error);
        });

        console.log("=====================End error details=====================");
    }

    console.log("=====================END TEST REPORT=====================");
}

runTest = () => {
    let errors = [],
        successes = 0,
        limit = countTests(),
        counter = 0;
    
    for (let key in tests){
        if(tests.hasOwnProperty(key)){
            let subTests = tests[key];
            for(let testName in subTests){
                if(subTests.hasOwnProperty(testName)){
                    //encapsulate variables 
                    (() => {
                        let tmpTestName = testName,
                            tmpTest = subTests[testName];
                        
                        try {
                            //call test with 'done' callback 
                            tmpTest(() => {
                                //success test 
                                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                                counter++;
                                successes++;
                                
                                if(counter == limit){
                                    showTestRunnerReport(errors, successes, limit);
                                }
                            });
                        } catch(e){
                            //test failed 
                            console.log('\x1b[31m%s\x1b[0m', tmpTestName);
                            counter++;

                            errors.push({
                                name: tmpTestName,
                                error: e
                            });

                            if(counter == limit){
                                showTestRunnerReport(errors, successes, limit);
                            }
                        }
                    })();
                }    
            }
        }
    }
}

//Run the test
runTest();