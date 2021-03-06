
$(document).ready(function(){
    let inp = $('#inp');
    let result = $('#result');
    let btn = $('#btn');
    display();
    btn.click(function(){
        makeRequest();

    });

    function makeRequest() {

        // Send the todo item
        let test = {
             "task" : inp.val(),
             "id": 5,
             "isActive": true
        }

        $.ajax({
            url: '/add',
            method: 'post',
            data: {todo: test},

            success: function(data) {
                result.append(`<li>
                              <span>${data.task}</span>
                              <button onclick="deleteKey(this)">Delete</button>
                              </li>`
                )
                // Append TodoList Item on Page
            }
        })

    }

    function display(){
        $.ajax({
            url: '/display',
            method: 'get',
            success: function(data) {
                data.forEach(function(i){
                    result.append(`<li>
                              <span>${i}</span>
                              <button onclick="deleteKey(this)">Delete</button>
                              </li>`)
                })
            }
        })

    }


});


function deleteKey(element) {
    let index = $(element).parent().index();


    $.ajax({
        url: '/delete',
        method: 'post',
        data: {id: index},
        success: function(data) {
            $(element).parent().remove();
        }
    })

}

// Call the function at the top, display()

/*
* function display() {
*
*   Get Request at /display route
*   Loop that todoList and append on the page
* }
 *
* */


