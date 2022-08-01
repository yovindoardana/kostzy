// Dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Navbar-Mobile
document.getElementById("btnMenu").onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
        var menuNav = document.getElementsByClassName("navbar-ul");
        var i;
        for (i = 0; i < menuNav.length; i++) {
            var openDropdown = menuNav[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            } else{
                openDropdown.classList.add('show');
            }
        }
    }
}

// Slider Product
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});