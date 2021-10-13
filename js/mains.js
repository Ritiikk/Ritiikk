function handleNavItemClick(e) {
    var clientWidth = document.body.clientWidth;

    if (clientWidth < 920) { 
        document.getElementsByClassName("navmenu-ul")[0].style.display = "none";
    }
}

window.onresize = function () {
    var clientWidth = document.body.clientWidth;
    console.log(clientWidth);
    
    if (clientWidth >= 920) {
        document.getElementsByClassName("navmenu-ul")[0].style.display = "flex";
    }
}