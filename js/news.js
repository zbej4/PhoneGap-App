$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    var db;
    var output = "<div class='col-md-4 portfolio-item'><img class='img-responsive' src='%%IMAGE%%'></a><h3>%%TITLE%%</h3><p>%%CONTENT%%</p></div>";

    function onDeviceReady(){
        console.log('here');
        db = window.openDatabase("goatdb","0.1","Goat Database", 2*1028*1028);
        console.log(db);
        db.transaction(queryDb, txError, txSuccess);
    }

    function queryDb(tx){
      tx.executeSql('SELECT * FROM news', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results){
      console.log(results);
      $('.results').html('');
      $.each(results.rows,function(){
        var temp_output = output.replace("%%IMAGE%%", this.image);
        var temp_output = temp_output.replace("%%TITLE%%", this.title);
        var temp_output = temp_output.replace("%%CONTENT%%", this.content);
        $('.results').append(temp_output);
      });
    }

    function errorCB(err){
        alert("Error processing SQL: "+err.code);
    }

    function txError(error){
      console.log(error);
      console.log("Database error: " + error);
    }

    function txSuccess(){
      console.log("Success");
    }

});
