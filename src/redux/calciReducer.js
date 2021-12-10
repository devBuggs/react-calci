import { createSlice } from "@reduxjs/toolkit";


const initialState = [{
    output: 0,
    sign: "",
    input: 0
}]

const toLocaleString = (val) => String(val).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (val) => val.toString().replace(/\s/g, "");

const calciReducer = createSlice({
    name: "calci",
    initialState, 
    reducers: {
        resetScreen : (state, action) => {
            //TODO: clear the output on Screen
            console.log("reset reducer value...", initialState[0].input, initialState[0].output, initialState[0].sign);
            return {...initialState[0], output: 0, input:0, sign: "" }
        },
        invertData : (state, action) => {
            //TODO
            console.log(" invert reducer...");
            return {...initialState[0],
                input: initialState[0].input ? toLocaleString(removeSpaces(initialState[0].input) * -1) : 0, 
                output: initialState[0].output ? toLocaleString(removeSpaces(initialState[0].output) * -1) : 0,
                // sign: "",
            }
        },
        percentageData : (state, action) => {
            console.log("percent reducer...");
            let input = initialState[0].input ? parseFloat(removeSpaces(initialState[0].input)) : 0;
            let output = initialState[0].output ? parseFloat(removeSpaces(initialState[0].output)) : 0;
            // return {...initialState, input: (input /= Math.pow(100, 1)), output: (output /= Math.pow(100, 1)), sign: "" }
            return {...initialState, input: (input /= Math.pow(100, 1)), output: (output /= Math.pow(100, 1))}
        },
        signData : (state, action) => {
            console.log("sign reducer...");
            return {...initialState, sign: action.payload, output: !initialState[0].output && initialState[0].input ? initialState[0].input : initialState[0].output, input: 0 }
        },
        dotData : (state, action) => {
            console.log("dot reducer...", );
            return {...initialState[0], input: !initialState[0].input.toString().includes(".") ? initialState[0].input + action.payload : initialState[0].input } 
        },
        inputData : (state, action) => {
            console.log("number reducer...", action.payload);
            // console.log("input reducer state: ", initialState[0].input);
            // debugger  // ******************************************************************************************************************************
            if (removeSpaces(initialState[0].input).length < 16) {
                return {...initialState[0],
                    input: initialState[0].input === 0 && action.payload === "0" ? "0" : removeSpaces(initialState[0].input) % 1 === 0 ? toLocaleString(Number(removeSpaces(initialState[0].input + action.payload))) : toLocaleString( initialState[0].input + action.payload),
                    output: !initialState[0].sign ? 0 : initialState[0].output
                }
            }
        },
        equalData : (state, action) => {
            console.log("equal reducer...");
            if (initialState[0].sign && initialState[0].input){
                const math = (a, b, sign) => sign === "+" ? a + b : sign === "-" ? a-b : sign === "X" ? a*b : a/b
                // return {...initialState[0], output: initialState[0].input === "0" && initialState[0].sign === "/" ? "can't divide with 0" : toLocaleString(math(Number(removeSpaces(initialState[0].output)), Number(removeSpaces(initialState[0].input)), initialState[0].sign)), sign: "", input: 0}
                return {...initialState[0], output: initialState[0].input === "0" && initialState[0].sign === "/" ? "can't divide with 0" : toLocaleString(math(Number(removeSpaces(initialState[0].output)), Number(removeSpaces(initialState[0].input)), initialState[0].sign))}
            }
        }

    }
});


export const { resetScreen, invertData, percentageData, signData, dotData, inputData, equalData } = calciReducer.actions;
export default calciReducer.reducer;