function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "menuham") {
        x.className += "responsive";
    } else {
        x.className = "menuham";
    }
}