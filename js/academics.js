$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    var db;
    var output = "<div class='element %%ID%%'><div class='cont'><div class='imgCont'><img src='%%IMAGE%%'></div><div class='title'><p class='name'>%%DEPARTMENT%%</p></div><div class='carrot' data-carrot='false' id='4'>></div></div><div class='desc' id='%%ID%%'>%%CONTENT%%</div></div>";

    function onDeviceReady(){
        console.log('here');
        db = window.openDatabase("goatdb","0.1","Goat Database", 2*1028*1028);
        console.log(db);
        db.transaction(queryDb, txError, txSuccess);
    }

    function queryDb(tx){
      tx.executeSql('SELECT * FROM academics', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results){
      console.log(results);
      $('.results').html('');
      $.each(results.rows,function(){
        var temp_output = output.replace("%%ID%%", this.id);
        var temp_output = temp_output.replace ("%%ID%%", this.id);
        var temp_output = temp_output.replace("%%DEPARTMENT%%", this.department);
        var temp_output = temp_output.replace("%%CONTENT%%", this.content);
        var temp_output = temp_output.replace("%%IMAGE%%", this.icon);
        $('.results').append(temp_output);
      });
      $('.results').append('<script src="js/majors.js"></script>');
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
