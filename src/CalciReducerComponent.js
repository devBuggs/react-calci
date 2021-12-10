
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonPannel from './components/ButtonPannel';
import Button from './components/Button';



import { resetScreen, invertData, percentageData, signData, dotData, inputData, equalData } from './redux/calciReducer';


const calciBtn = ['AC', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '='];


function CalciReducerComponent() {
    const state = useSelector( (state) => state.calci )
    console.log("Initial app data: ", state);

    const dispatch = useDispatch();

    const resetClickHandler = (e) => {
        e.preventDefault();
        console.log("reset action triggered ");
        dispatch( resetScreen());
    }

    const invertClickHandler = (e) => {
        e.preventDefault();
        console.log("invert action triggered ");
        dispatch( invertData());
    }

    const percentClickHandler = (e) => {
        e.preventDefault();
        console.log("percent action triggered ");
        dispatch( percentageData());
    }

    const equalsClickHandler = (e) => {
        e.preventDefault();
        console.log("result or equal action triggered ");
        dispatch( equalData());
    }
    
    const signClickHandler = (e) => {
        e.preventDefault();
        console.log("sign action triggered ");
        const value = e.target.innerHTML;
        dispatch( signData( value));
    }

    const dotClickHandler = (e) => {
        e.preventDefault();
        console.log("decimal action triggered ");
        const value = e.target.innerHTML;
        dispatch( dotData( value));
    }

    const numClickHandler = (e) => {
        e.preventDefault();
        console.log("number button triggered ");
        const value = e.target.innerHTML;
        dispatch( inputData( `${value}`));
    }

    return (
        <>
            <h3>With Reducer </h3>
            <Wrapper>
                <Screen value={state.input ? state.input : state.output}/>
                <ButtonPannel key="8080">
                    {
                        calciBtn.map((item, i) => {
                            return (
                                <Button key={i} className={item === "=" ? "equals" : ""} value={item}
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

export default CalciReducerComponent;