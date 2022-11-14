
$(document).ready(function() {
    
    console.log(localStorage.getItem("username"))
    
    orderTab = $('#ordersTab');
    logout = $('#logout');
    
    orderTab.css('border-bottom','2px solid rgb(45, 220, 45)')
    orderTab.css('color','rgb(45, 220, 45)')
    
    logout.on('click', function() {
        
        localStorage.removeItem("username");
    })
    
    var newBox = $('#new');
    var packed = $('#packed');
    var intransit = $('#intransit');
    var delivered = $('#delivered');

    newBox.attr('checked','true');
    packed.attr('checked','true');
    intransit.attr('checked','true');
    delivered.attr('checked','true');


    $.ajax({

        url: "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        method: "GET",
        success: function(orders) {

            console.log(orders);
            
            var tableBody = $('#tableBody');
            var counter = 0;

            // console.log(newBox.val())
            // console.log(newBox.val())

            var checkBox = $('#checkBox');
            checkBox.on('click', function(e) {

                // var boxName = e.target.name;
                var totalBox = [newBox, packed, intransit, delivered];
                var checkVal = totalBox.map((v) => {return v.is(':checked')});

                console.log(totalBox.map((v) => {return v.is(':checked')}))

                // if( ) {

                // }
                checkVal.map((val, index) => {

                    if(val == true) {

                        console.log(totalBox[index].attr('name'));
                        var pass = totalBox[index].attr('name');

                        orders.map((o) => {

                            if(o.orderStatus == pass) {

                                var tr = $('<tr>');
                                var id = $('<td>').text(o.id);
                                var name = $('<td>').text(o.customerName);
                                var amount = $('<td>').text(o.amount);
                                var status = $('<td>').text(o.orderStatus);
                                var date = $('<td>').append($('<p>').text(o.orderDate)).append($('<p>').text(o.orderTime));
                
                                tr.append(id, name, date, amount, status);
                                tableBody.append(tr);
                
                                counter++;
                                var count = $('#count');
                                count.text('Count: ' + counter);
                                // for(var i = 0;i < orders.length;i++) {
    
                                // }
                            }
                        })

                    }
                    
                    return val
                
                })

            })

            
            // if(newBox.is(':checked') === true && packed.is(':checked') === true && intransit.is(':checked') === true || delivered.is(':checked' === true) ) {
                
            //     // console.log(delivered.is(':checked'))
            //     for(var i = 0;i < orders.length;i++) {
    
            //         var tr = $('<tr>');
            //         var id = $('<td>').text(orders[i].id);
            //         var name = $('<td>').text(orders[i].customerName);
            //         var amount = $('<td>').text(orders[i].amount);
            //         var status = $('<td>').text(orders[i].orderStatus);
            //         var date = $('<td>').append($('<p>').text(orders[i].orderDate)).append($('<p>').text(orders[i].orderTime));
    
            //         tr.append(id, name, date, amount, status);
            //         tableBody.append(tr);
    
            //         counter++;
            //         var count = $('#count');
            //         count.text('Count: ' + counter);
            //     }

            // }
            

            

        }
    })
})