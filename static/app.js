$(document).ready(function (){
    var socket = io(); //..................................1

    let localData = document.getElementById("localHo"); //based on id of button
    let resultData = document.getElementById("resultHo"); //based on id of div

    socket.on('greeting', function (data) { //.......................4
        console.log(data.msg); //.........................5
        socket.emit('thankyou', { msg: 'Thank you for connecting me! -Client' }); //6
    });

    localData.addEventListener("click", function() {
        console.log("buttton clicked")
        socket.emit("submit", {
            name: document.getElementById("name").value,
            location: document.getElementById("location").value,
            language: document.getElementById("language").value,
            comment: document.getElementById("comment").value,
        });
    });

    socket.on('submit', function(output) {
        let d = JSON.stringify(output.data);
        resultData.innerHTML = `<p class="lead">You emitted the following information:<h4>${d}</h4></p><p class="lead">Your lucky number is: ${output.num}</p>`;
        resultData.style.display = "block"; //show hidden div
    })

});