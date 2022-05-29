
function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("navbar").style.top = "-200px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
}

