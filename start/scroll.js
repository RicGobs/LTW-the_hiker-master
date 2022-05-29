
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.top = "-200px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
}

