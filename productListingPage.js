
$(document).ready(function() {
    
    console.log(localStorage.getItem("username"))

    productTab = $('#productsTab');
    logout = $('#logout');

    productTab.css('border-bottom','2px solid rgb(45, 220, 45)')
    productTab.css('color','rgb(45, 220, 45)')

    logout.on('click', function() {
        
        localStorage.removeItem("username");
        
    })
})