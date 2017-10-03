$(document).ready(function() {
    var config = {
        apiKey: "AIzaSyAKt8G7YAWuv3M10A9AmZziHpsvM9feluo",
        authDomain: "first-cat.firebaseapp.com",
        databaseURL: "https://first-cat.firebaseio.com",
        projectId: "first-cat",
        storageBucket: "first-cat.appspot.com",
        messagingSenderId: "110272689478"
    };
    firebase.initializeApp(config);

    var database = firebase.database();




    // On Click
    $("#submit").on("click", function(event) {
        event.preventDefault();

        // Grabs user input
        var trainName = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var frequency = $("#frequency").val().trim();
        var time = $("#time").val().trim();

        var newTrain = {
            name: trainName,
            destination: destination,
            time: time,
            frequency: frequency
        };

        database.ref('/trains').push(newTrain);

        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.time);
        console.log(newTrain.frequency);







        $("#name").val("");
        $("#destination").val("");
        $("#frequency").val("");
        $('#time').val("");


        
    });
    
    database.ref('/trains').on("child_added", function(train, prevChildKey) {

        console.log(train.val());
        var trainData = train.val();

        // Store everything into a variable.
        var trainName = trainData.name;
        var destination = trainData.destination;
        var frequency = trainData.frequency;
        var time = trainData.time
        // Employee Info
        console.log(trainName);
        console.log(destination);
        console.log(frequency);
        console.log(time);



        // First Time (pushed back 1 year to make sure it comes before current time)
        var timeConverted = moment(time, "hh:mm").subtract(1, "years");
        console.log(timeConverted);

        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

        // Difference between the times
        var diffTime = moment().diff(moment(timeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

        // Time apart (remainder)
        var tRemainder = diffTime % frequency;
        console.log(tRemainder);

        // Minute Until Train
        var tMinutesTillTrain = frequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");

        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

        // Add each train's data into the table
        $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
            frequency + "</td><td>" + nextTrain.format("hh:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
    });

  


});