
import Button from "./components/Button";
import ButtonPannel from "./components/ButtonPannel";

const calciBtn = ['AC', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '='];


function UIReducerComponent() {


    const handleOnChange = (e) => {
        e.preventDefault();
        let userInput = e.target.value;
        console.log("User Input", userInput);
    }

    const onClickHandler = (e, item) => {
        e.preventDefault();
        // item === "AC" ? resetClickHandler : item === "+-" ? invertClickHandler : item === "%" ? percentClickHandler : item === "=" ? equalsClickHandler : item === "/" || item === "X" || item === "-" || item === "+" ? signClickHandler : item === "." ? dotClickHandler : numClickHandler
        switch(item){
            case "AC":
                //TODO
                console.log(`${item} clicked!`);
                break;
            case "+-":
                // TODO
                console.log(`${item} clicked!`);
                break;
            case "%":
                //TODO
                console.log(`${item} clicked!`);
                break;
            case "=":
                // TODO
                console.log(`${item} clicked!`);
                break;
            case "/":
                // TODO
                console.log(`${item} clicked!`);
                break;
            case "X":
                // TODO
                console.log(`${item} clicked!`);
                break;
            case "-":
                // TODO
                console.log(`${item} clicked!`);
                break;
            case "+":
                // TODO
                console.log(`${item} clicked!`);
                break;
            case ".":
                //
                console.log(`${item} clicked!`);
                break;
            default:
                // 
                console.log(`${item} clicked!`);
                break;
        }
    }

    return (
        <>
            <div> <input type="text" defaultValue='0' onChange={handleOnChange} /></div>
            <div>
                <ButtonPannel>
                    {
                        calciBtn.map((item, i) => {
                            return (
                                <Button key={i} className={item === "=" ? "equals" : ""} value={item}
                                    // onClick={(e) => item === "AC" ? screenResetHandler : console.log(`${item} clicked!`) }
                                    // onClick={screenResetHandler}
                                    onClick={(item) => onClickHandler}
                                />
                            );
                        })
                    }
                </ButtonPannel>
            </div>
        </>
    );
}

export default UIReducerComponent;