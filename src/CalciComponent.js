import { React, useState } from 'react';


import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonPannel from './components/ButtonPannel';
import Button from './components/Button';



const calciBtn = ['AC', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '='];

const toLocaleString = (input) => String(input).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
const removeSpaces = (input) => input.toString().replace(/\s/g, "");


function CalciComponent() {

    let [calciState, setCalciState] = useState({
		sign: "",
		input: 0,
		output: 0,
	});

	const numClickHandler = (e) => {
		e.preventDefault();
		console.log("number button");
		const value = e.target.innerHTML;
		// dispatch( inputData( value));

		if (removeSpaces(calciState.input).length < 16) {
			setCalciState({
				...calciState,
				input:
					calciState.input === 0 && value === "0"
						? "0"
						: removeSpaces(calciState.input) % 1 === 0
							? toLocaleString(Number(removeSpaces(calciState.input + value)))
							: toLocaleString(calciState.input + value),
				output: !calciState.sign ? 0 : calciState.output,
			});
		}
	};

	const dotClickHandler = (e) => {
		e.preventDefault();
		console.log("dot button");
		const value = e.target.innerHTML;
		// dispatch( dotData( value));
		setCalciState({
			...calciState,
			input: !calciState.input.toString().includes(".") ? calciState.input + value : calciState.input,
		});
	};

	const signClickHandler = (e) => {
		e.preventDefault();
		console.log("sign button");
		const value = e.target.innerHTML;
		// dispatch ( signData( value));
		setCalciState({
			...calciState,
			sign: value,
			output: !calciState.output && calciState.input ? calciState.input : calciState.output,
			input: 0,
		});
	};

	const equalsClickHandler = () => {
		console.log("equal button handler");
		// dispatch( equalData());
		if (calciState.sign && calciState.input) {
			const math = (a, b, sign) =>
				sign === "+"
					? a + b
					: sign === "-"
						? a - b
						: sign === "X"
							? a * b
							: a / b;

			setCalciState({
				...calciState,
				output:
					calciState.input === "0" && calciState.sign === "/"
						? "Can't divide with 0"
						: toLocaleString(
							math(
								Number(removeSpaces(calciState.output)),
								Number(removeSpaces(calciState.input)),
								calciState.sign
							)
						),
				sign: "",
				input: 0,
			});
		}
	};

	const invertClickHandler = () => {
		setCalciState({
			...calciState,
			input: calciState.input ? toLocaleString(removeSpaces(calciState.input) * -1) : 0,
			output: calciState.output ? toLocaleString(removeSpaces(calciState.output) * -1) : 0,
			sign: "",
		});
	};


	const percentClickHandler = () => {
		console.log("percent handler");
		// dispatch( percentageData());
		let input = calciState.input ? parseFloat(removeSpaces(calciState.input)) : 0;
		let output = calciState.output ? parseFloat(removeSpaces(calciState.output)) : 0;

		setCalciState({
			...calciState,
			input: (input /= Math.pow(100, 1)),
			output: (output /= Math.pow(100, 1)),
			sign: "",
		});
	};

	const resetClickHandler = () => {
		setCalciState({
			...calciState,
			sign: "",
			input: 0,
			output: 0,
		});
	};

    return (
        <>
            <h3>With useState Hook</h3>
            <Wrapper>
                <Screen value={calciState.input ? calciState.input : calciState.output} />
                {/* <Screen value={state[0].input ? state[0].input : state[0].output}/> */}
                <ButtonPannel key="8080">
                    {
                        calciBtn.map((item, i) => {
                            return (
                                <Button key={i} className={item === "=" ? "equals" : ""} value={item}
                                    // onClick={(e) => item === "AC" ? screenResetHandler : console.log(`${item} clicked!`) }
                                    // onClick={screenResetHandler}
                                    onClick={
                                        item === "AC"
                                            ? resetClickHandler
                                            : item === "+-"
                                                ? invertClickHandler
                                                : item === "%"
                                                    ? percentClickHandler
                                                    : item === "="
                                                        ? equalsClickHandler
                                                        : item === "/" || item === "X" || item === "-" || item === "+"
                                                            ? signClickHandler
                                                            : item === "."
                                                                ? dotClickHandler
                                                                : numClickHandler
                                    }
                                />
                            );
                        })
                    }
                </ButtonPannel>
            </Wrapper>
        </>
	);
}





export default CalciComponent;

