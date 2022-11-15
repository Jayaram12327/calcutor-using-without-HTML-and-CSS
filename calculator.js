let div1 = document.createElement("div");
div1.setAttribute("id","a1");
div1.setAttribute("class","mt-5 ")
let heading = document.createElement("h1");
heading.innerText="Calculator";
heading.setAttribute("class","text-center");
div1.appendChild(heading);
document.body.append(div1);

let divText = document.createElement("div")
divText.setAttribute("class","text-center");
let textbox = document.createElement("input");
textbox.setAttribute("id","screen");
textbox.setAttribute("class","form-control border-success");
// textbox.setAttribute("width","100%");
divText.appendChild(textbox);
document.body.append(divText);

let div2 = document.createElement("div");
div2.setAttribute("class","row ms-4 mt-5  text-center");
let div3 = document.createElement("div");
div3.setAttribute("class","col-3 mb-5");
let btn1 = document.createElement("button");
btn1.setAttribute("class","py-2 px-5 btn btn-success")
btn1.innerText = 1;
let div4 = document.createElement("div");
div4.setAttribute("class","col-3");
let btn2 = document.createElement("button");
btn2.setAttribute("class","py-2 px-5 btn btn-success")
btn2.innerText = 2;
let div5 = document.createElement("div");
div5.setAttribute("class","col-3");
let btn3 = document.createElement("button");
btn3.setAttribute("class","py-2 px-5 btn btn-success")
btn3.innerText = 3;
let div6 = document.createElement("div");
div6.setAttribute("class","col-3");
let btn4 = document.createElement("button");
btn4.setAttribute("class","py-2 px-5 btn btn-danger")
btn4.innerText = "+";
let div7 = document.createElement("div");
div7.setAttribute("class","col-3 mb-5");
let btn5 = document.createElement("button");
btn5.setAttribute("class","py-2 px-5 btn btn-success")
btn5.innerText = 4;
let div8 = document.createElement("div");
div8.setAttribute("class","col-3");
let btn6 = document.createElement("button");
btn6.setAttribute("class","py-2 px-5 btn btn-success")
btn6.innerText = 5;
let div9 = document.createElement("div");
div9.setAttribute("class","col-3");
let btn7 = document.createElement("button");
btn7.setAttribute("class","py-2 px-5 btn btn-success")
btn7.innerText = 6;
let div10 = document.createElement("div");
div10.setAttribute("class","col-3");
let btn8 = document.createElement("button");
btn8.setAttribute("class","py-2 px-5 btn btn-danger")
btn8.innerText = "-";
let div11 = document.createElement("div");
div11.setAttribute("class","col-3");
let btn9 = document.createElement("button");
btn9.setAttribute("class","py-2 px-5 btn btn-success")
btn9.innerText = 7;
let div12 = document.createElement("div");
div12.setAttribute("class","col-3");
let btn10 = document.createElement("button");
btn10.setAttribute("class","py-2 px-5 btn btn-success")
btn10.innerText = 8;
let div13 = document.createElement("div");
div13.setAttribute("class","col-3");
let btn11 = document.createElement("button");
btn11.setAttribute("class","py-2 px-5 btn btn-success")
btn11.innerText = 9;
let div14 = document.createElement("div");
div14.setAttribute("class","col-3");
let btn12 = document.createElement("button");
btn12.setAttribute("class","py-2 px-5 btn btn-danger")
btn12.innerText = "X";
let a = document.createElement("div");
a.setAttribute("class","col-12 p-5");
let b1 = document.createElement("button");
b1.setAttribute("class","py-2 px-5 btn btn-success")
b1.innerText = 0;
let div15 = document.createElement("div");
div15.setAttribute("class","d-grid gap-2 col-6 mx-auto p-5");
let btn13 = document.createElement("button");
btn13.setAttribute("class","py-2  btn btn-dark btn-lg p-5")
btn13.setAttribute("id","submit")
btn13.innerText = "C";
let div16 = document.createElement("div");
div16.setAttribute("class","d-grid gap-2 col-6 mx-auto p-5");
let btn14 = document.createElement("button");
btn14.setAttribute("class","py-2  btn btn-warning btn-lg p-5")
btn12.setAttribute("id","Clear")
btn14.innerText = "=";

div3.appendChild(btn1);
div2.appendChild(div3);
div4.appendChild(btn2);
div2.appendChild(div4);
div5.appendChild(btn3);
div2.appendChild(div5);
div6.appendChild(btn4)
div2.appendChild(div6)
div7.appendChild(btn5);
div2.appendChild(div7);
div8.appendChild(btn6);
div2.appendChild(div8);
div9.appendChild(btn7);
div2.appendChild(div9);
div10.appendChild(btn8);
div2.appendChild(div10);
div11.appendChild(btn9);
div2.appendChild(div11);
div12.appendChild(btn10);
div2.appendChild(div12);
div13.appendChild(btn11);
div2.appendChild(div13);
div14.appendChild(btn12);
div2.appendChild(div14);
a.appendChild(b1);
div2.appendChild(a);
div15.appendChild(btn13);
div2.appendChild(div15);
div16.appendChild(btn14);
div2.appendChild(div16);
document.body.append(div2);

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

