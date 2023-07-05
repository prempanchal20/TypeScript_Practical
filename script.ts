const input = document.querySelector("input") as HTMLInputElement;
const buttons = document.querySelectorAll("button");
const backspace = document.getElementById("backspace") as HTMLInputElement;
const dropdown = document.querySelector("#dropdown-menu") as HTMLElement;
const dropdown_func = document.querySelector("#dropdown-func") as HTMLElement;
const trig_btn = document.querySelector(".trigonometry") as HTMLElement;
const func_btn = document.querySelector(".func") as HTMLElement;

//-------------------------------------------Dropdown Functionality-------------------------------------------//

trig_btn.addEventListener("click", () => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    }
    else {
        dropdown.style.display = "none";
    }
});

func_btn.addEventListener("click", () => {
    if (dropdown_func.style.display === "none") {
        dropdown_func.style.display = "block";
    }
    else {
        dropdown_func.style.display = "none";
    }
});

//-------------------------------Change Onclick button from DEG to RAD--------------------------------------//

const btn = document.getElementById("deg") as HTMLElement;
btn!.addEventListener("click", function (): void {
    if (btn!.textContent === "DEG") {
        btn!.textContent = "RAD";
    } else {
        btn!.textContent = "DEG";
    }
});

//--------------------------------------Degree to Radiant Functionality--------------------------------------//

function btnDegToRad(inputVal: number, btn: string) {
    if (btn === "DEG") {
        let pi = Math.PI;
        input.value = (inputVal * (180 / pi)).toString();
    } else {
        let pi = Math.PI;
        input.value = (inputVal * (pi / 180)).toString();
    }
}

//--------------------------------------MOD & 10x Functionality--------------------------------------//

function modOperator(num: string) {
    if (num.includes("mod")) {
        let split_mod = num.split("mod");
        input.value = (Number(split_mod[0]) % Number(split_mod[1])).toString();
    }

    else if (num.includes("10 x")) {
        let splitTen = num.split("*");
        let multiplication = 10;
        for (let i = 1; i < Number(splitTen[1]); i++) {
            multiplication = multiplication * 10;
        }
    }
}

//--------------------------------------Factorial Functionality--------------------------------------//

function factorial(num: number): number {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else return num * factorial(num - 1);
}

//--------------------------------------Trignometry Functionality--------------------------------------//

function trigno(type: string, num1: number) {
    switch (type) {
        case "Sin":
            input.value = Math.sin((+num1 * Math.PI) / 180.0).toString();
            break;

        case "Cos":
            input.value = Math.cos((+num1 * Math.PI) / 180.0).toString();
            break;

        case "Tan":
            input.value = Math.tan((+num1 * Math.PI) / 180.0).toString();
            break;
    }
}

//--------------------------------------+/- Functionality--------------------------------------//

function plusMinusOperator(num: string) {
    input.value = (-Number(num)).toString();
}

//--------------------------------------Button Click Event--------------------------------------//

buttons.forEach((btn) =>
    btn.addEventListener("click", (event) => {
        let inputVal = input.value.toString();
        if (event.target instanceof HTMLElement && event.target.innerText === "=") {

            //--------------------------------Trigonometry Function--------------------------------//
            if (input.value.includes("Sin")) {
                let trig = input.value;
                let trig__num = trig.split(" ");
                let numArray = parseInt(trig__num[1]);
                let type = trig__num[0];
                trigno(type, numArray);
            }

            else if (input.value.includes("Cos")) {
                let trig = input.value;
                let trig__num = trig.split(" ");
                let numArray = parseInt(trig__num[1]);
                let type = trig__num[0];
                trigno(type, numArray);
            }

            else if (input.value.includes("Tan")) {
                let trig = input.value;
                let trig__num = trig.split(" ");
                let numArray = parseInt(trig__num[1]);
                let type = trig__num[0];
                trigno(type, numArray);
            }

            else if (input.value.includes("mod")) {
                modOperator(input.value);
            }

            else if (input.value.includes("^")) {
                let xSquareY = input.value.split("^");
                input.value = Math.pow(
                    Number(xSquareY[0]),
                    Number(xSquareY[1])
                ).toString();
            }

            else {
                input.value = eval(input.value).toString();
            }
        }

        //--------------------------------------Backspace Event--------------------------------------//

        else if (event.target instanceof HTMLElement && event.target.innerText === "") {
            let backSpaceVal = inputVal.substring(0, inputVal.length - 1);
            input.value = backSpaceVal;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "F-E") {
            let toFe = +input.value;
            input.value = toFe.toExponential();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "2n") {
            input.value = Math.pow(2, Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "3n") {
            input.value = Math.pow(3, Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "n3") {
            input.value = Math.pow(Number(input.value), 3).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "∛x") {
            input.value = Math.cbrt(Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "MR") {
            const storedValue = localStorage.getItem("inputVal");
            input.value = storedValue ?? "";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "MC") {
            localStorage.removeItem("inputVal");
            input.value = "";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "M+") {
            input.value = (
                Number(localStorage.getItem("inputVal")) + Number(input.value)
            ).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "M-") {
            input.value = (
                Number(input.value) - Number(localStorage.getItem("inputVal"))
            ).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "MS") {
            localStorage.setItem("inputVal", input.value);
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "x") {
            input.value += "*";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "exp") {
            input.value = Math.exp(Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "÷") {
            input.value += "/";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "C") {
            input.value = "";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "e") {
            input.value += "2.71 *";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "π") {
            const π = 3.14;
            input.value = (Number(input.value) * π).toString();
            input.value = (Number(input.value) + π).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "x2") {
            input.value = Math.pow(Number(input.value), 2).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "n!") {
            input.value = factorial(Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "xy") {
            input.value += "^";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "1/x") {
            input.value = `1/`;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "|x|") {
            input.value = Math.abs(+input.value).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "√") {
            input.value = Math.sqrt(+input.value).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "10 x") {
            input.value = "10*";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "log") {
            input.value = (Math.log(+input.value) / Math.LN10).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "ln") {
            input.value = Math.log(+input.value).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "+/-") {
            plusMinusOperator(input.value);
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "Round") {
            input.value = Math.round(+input.value).toString();;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "Ceil") {
            input.value = Math.ceil(+input.value).toString();;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "Floor") {
            input.value = Math.floor(+input.value).toString();;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "DEG") {
            btnDegToRad(+input.value, "DEG");
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "RAD") {
            btnDegToRad(+input.value, "RAD");
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "sin") {
            input.value = "Sin " + input.value;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "cos") {
            input.value = "Cos " + input.value;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "tan") {
            input.value = "Tan " + input.value;
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "x^-1") {
            input.value = (1 / Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "x^2") {
            input.value = Math.pow(Number(input.value), 2).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "x^3") {
            input.value = Math.pow(Number(input.value), 3).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "10^x") {
            input.value = Math.pow(10, Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "log") {
            input.value = Math.log10(Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "ln") {
            input.value = Math.log(Number(input.value)).toString();
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "mod") {
            input.value += " mod ";
        }

        else if (event.target instanceof HTMLElement && event.target.innerText === "+/-") {
            plusMinusOperator(input.value);
        } else {
            input.value += event.target instanceof HTMLElement && event.target.innerText;
        }
    })
);

