$(document).ready(function () {

    console.log(localStorage.getItem("username"))

    if(localStorage.getItem("username") == 'kirito') {

        window.location.replace("http://127.0.0.1:5500/Certification%20exam/orderListingPage.html")
    }

    $('#login').on('click', function () {

        let userName = '';
        let passWord = '';

        userName = $('#userName').val();

        passWord = $('#passWord').val();
        // console.log(userName, passWord);

        if (userName == 'kirito' && passWord == 'kirito') {

            // $('#nextPage').attr('href', './orderListingPage.html')
            alert('Login Successfully!!!');
            localStorage.setItem("username", "kirito");

        } else if(userName == '' && passWord == '') {

            alert('Please enter Username and Password!!!');

        } else if(userName != '' && passWord == '') {
            
            alert('Please enter Password!!!');

        } else if(userName == '' && passWord != '') {
            
            alert('Please enter Username!!!');

        } else {

            alert('Please enter correct Username and Password!!!');
        }

    })
})
