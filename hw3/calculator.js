window.onload = function() {
    var output,
        limit,
        zero,
        dot,
        operator;
    var screen = document.getElementById("result");
    var elem = document.querySelectorAll(".num");
    var len = elem.length;
    for(var i = 0; i < len; i++ ) {
        elem[i].addEventListener("click",function() {
            num = this.value;
            output = screen.innerHTML +=num;
            limit = output.length;
            if(limit > 16 ) {
                alert("So long!");
            }
        },false);
    }

    document.querySelector(".zero").addEventListener("click",function() {
        zero = this.value;
        if(screen.innerHTML === "") {
            output = screen.innerHTML = zero;
        }
        else if(screen.innerHTML === output) {
            output = screen.innerHTML +=zero;
        }
    },false);

    document.querySelector(".dot").addEventListener("click",function() {
        dot= this.value;
        if(screen.innerHTML === "") {
            output = screen.innerHTML = screen.innerHTML.concat("0.");
        }
        else if(screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML.concat(".");
        }
    },false);

    document.querySelector("#equal").addEventListener("click",function() {
        if(screen.innerHTML === output) {
            screen.innerHTML = eval(output);
        }
        else {
            screen.innerHTML = "";
        }
    },false);

    document.querySelector("#delete").addEventListener("click",function() {
        screen.innerHTML = "";
    },false);

    var elem1 = document.querySelectorAll(".operator");
    var len1 = elem1.length;
    for(var i = 0; i < len1; i++ ) {
        elem1[i].addEventListener("click",function() {
            operator = this.value;
            if(screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("");
            }
            else if(output) {
                screen.innerHTML = output.concat(operator);
            }
        },false);
    }
};
