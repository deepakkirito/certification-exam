
$(document).ready(function() {
    
    console.log(localStorage.getItem("username"))

    usersTab = $('#usersTab');
    logout = $('#logout');

    usersTab.css('border-bottom','2px solid rgb(45, 220, 45)')
    usersTab.css('color','rgb(45, 220, 45)')

    logout.on('click', function() {
        
        localStorage.removeItem("username");

    })
})