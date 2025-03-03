// Navbar Start
document.getElementById("menu-btn").addEventListener("click", function(){
    var navbar = document.getElementById("navbar");
    if (navbar.style.right === "8rem") {
        navbar.style.right = "-250px";
    } else {
        navbar.style.right = "8rem";
    }
})