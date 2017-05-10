$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    var db;
    var output = "<div class='faculty'><div class='cont'><div class='imgCont'><img class='pic' src='%%IMAGE%%'></div><div class='title'><p class='name'>%%NAME%%</p><p class='job'>> %%FIELD%%</p></div><div class='carrot' data-carrot='false'>></div></div><div class='desc'>%%CONTENT%%</div></div>";

    function onDeviceReady(){
        console.log('here');
        db = window.openDatabase("goatdb","0.1","Goat Database", 2*1028*1028);
        console.log(db);
        db.transaction(queryDb, txError, txSuccess);
    }

    function queryDb(tx){
      tx.executeSql('SELECT * FROM faculty', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results){
      console.log(results);
      $('.results').html('');
      $.each(results.rows,function(){
        var temp_output = output.replace("%%IMAGE%%", this.image);
        var temp_output = temp_output.replace("%%NAME%%", this.name);
        var temp_output = temp_output.replace("%%FIELD%%", this.field);
        var temp_output = temp_output.replace("%%CONTENT%%", this.content);
        $('.results').append(temp_output);
      });
      $('.results').append('<script src="js/directory.js"></script>');
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
