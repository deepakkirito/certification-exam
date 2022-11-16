

$(document).ready(function () {

    console.log(localStorage.getItem("username"))

    usersTab = $('#usersTab');
    logout = $('#logout');

    usersTab.css('border-bottom', '2px solid rgb(45, 220, 45)')
    usersTab.css('color', 'rgb(45, 220, 45)')

    logout.on('click', function () {

        localStorage.removeItem("username");

    })

    $.ajax({

        url: 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users',
        method: 'GET',
        success: function (user) {

            console.log(user);

            var tableBody = $('#tableBody');
            var search = $('#search');
            var counter = 0;

            for (i = 0; i < user.length; i++) {

                var tr = $('<tr>');
                var id = $('<td>').text(user[i].id);
                var name = $('<td>').append($('<img>').attr('src', user[i].profilePic));
                var amount = $('<td>').text(user[i].fullName);
                var status = $('<td>').text(user[i].dob);
                var gender = $('<td>').text(user[i].gender);
                var location = $('<td>').text(user[i].currentCity + ', ' + user[i].currentCountry);

                tr.append(id, name, amount, status, gender, location);
                tableBody.append(tr);

                counter++;

                var count = $('#count');
                count.text('Count: ' + counter);
            }

            counter = 0;

            var button = $('button');

            button.on('click', function () {

                for (i = 0; i < user.length; i++) {

                    var tr = $('<tr>');
                    var id = $('<td>').text(user[i].id);
                    var name = $('<td>').append($('<img>').attr('src', user[i].profilePic));
                    var amount = $('<td>').text(user[i].fullName);
                    var status = $('<td>').text(user[i].dob);
                    var gender = $('<td>').text(user[i].gender);
                    var location = $('<td>').text(user[i].currentCity + ', ' + user[i].currentCountry);

                    tr.append(id, name, amount, status, gender, location);
                    tableBody.append(tr);

                    counter++;

                    var count = $('#count');
                    count.text('Count: ' + counter);

                }

                counter = 0;
                search.val('');
                
            })

            var length = 0;

            search.on('keyup', function () {

                // console.log(searchText);
                
                $(document).on("keypress", function (e) {
                    
                    if (e.which == 13) {
                        
                        var searchText = search.val().split('');

                        if (searchText.length < 3) {

                            alert('Enter more than two characters');

                            for (i = 0; i < user.length; i++) {

                                var tr = $('<tr>');
                                var id = $('<td>').text(user[i].id);
                                var name = $('<td>').append($('<img>').attr('src', user[i].profilePic));
                                var amount = $('<td>').text(user[i].fullName);
                                var status = $('<td>').text(user[i].dob);
                                var gender = $('<td>').text(user[i].gender);
                                var location = $('<td>').text(user[i].currentCity + ', ' + user[i].currentCountry);
            
                                tr.append(id, name, amount, status, gender, location);
                                tableBody.append(tr);
            
                                counter++;
            
                                var count = $('#count');
                                count.text('Count: ' + counter);
            
                            }

                        } else {

                            tableBody.html('');

                            for (i = 0; i < user.length; i++) {

                                // compareText = searchText;
                                textArray = user[i].fullName.split('');
                                textArray = textArray.slice(0,searchText.length)
                                // console.log(textArray)
                                textArray[0] = textArray[0].toLowerCase()

                                console.log(textArray , searchText)
                                if (JSON.stringify(textArray) === JSON.stringify(searchText)) {

                                    var tr = $('<tr>');
                                    var id = $('<td>').text(user[i].id);
                                    var name = $('<td>').append($('<img>').attr('src', user[i].profilePic));
                                    var amount = $('<td>').text(user[i].fullName);
                                    var status = $('<td>').text(user[i].dob);
                                    var gender = $('<td>').text(user[i].gender);
                                    var location = $('<td>').text(user[i].currentCity + ', ' + user[i].currentCountry);

                                    tr.append(id, name, amount, status, gender, location);
                                    tableBody.append(tr);

                                    counter++;

                                    var count = $('#count');
                                    count.text('Count: ' + counter);

                                }
                               
                            }
                        }
                    }

                    counter = 0;
                })
            })
        }
    })
})
