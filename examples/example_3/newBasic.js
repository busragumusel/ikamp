var Element = function () {
};

Element.prototype.showElement = function (param) {
    console.log(param);
    if (param && document.getElementById(param)){
        return document.getElementById(param);
    }
    else if(document.getElementsByClassName(param))
    {
        return document.getElementsByClassName(param);
    }
    else if(document.getElementsByTagName(param))
    {
        return document.getElementsByTagName(param);
    } else {
        return false;
    }
};
