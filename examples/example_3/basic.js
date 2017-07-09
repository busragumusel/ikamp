document.getElementById('header').style.color = 'red';
document.getElementById('firstChild').style.color = 'red';
document.getElementsByClassName('third')[0].style.color = 'green';
myLink = document.getElementById('hd');
container = document.getElementById('container');
function buttonClick(string) {
    alert('This is container!' + string);
}

myLink.addEventListener("click", function () {
    alert("This is H2.");
});

container.addEventListener("click", buttonClick, false);

window.addEventListener("keydown", function (e) {
    if (e.key == 'Enter') {
        document.getElementById("myTextBook").innerHTML += "<br />";
    }
    else if (e.key == 'Backspace') {
        var wordArray = document.getElementById("myTextBook").innerHTML;
        document.getElementById("myTextBook").innerHTML = wordArray.slice(0,-1);
    } else {
        document.getElementById("myTextBook").innerHTML += e.key;
    }
});

var element = new Element();
