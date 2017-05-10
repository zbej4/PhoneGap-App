$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    var db;

    function onDeviceReady(){
        db = window.openDatabase("goatdb","0.1","Goat Database", 2*1028*1028);
        db.transaction(createDb, txError, txSuccess);
        db.transaction(populateNewsDb, txError, txSuccess);
        db.transaction(populateEventsDb, txError, txSuccess);
        db.transaction(populateAcademicsDb, txError, txSuccess);
        db.transaction(populateFacultyDb, txError, txSuccess);
        db.transaction(populateGraduatesDb, txError, txSuccess);
    }
    /*============================Create Tables=====================================*/
    function createDb(tx){
      tx.executeSql("DROP TABLE IF EXISTS news");
      tx.executeSql("DROP TABLE IF EXISTS events");
      tx.executeSql("DROP TABLE IF EXISTS academics");
      tx.executeSql("DROP TABLE IF EXISTS faculty");
      tx.executeSql("DROP TABLE IF EXISTS graduates");
      tx.executeSql("CREATE TABLE news(id,title,content,image)");
      tx.executeSql("CREATE TABLE events(id,title,content,image)");
      tx.executeSql("CREATE TABLE academics(id,department,content,icon)");
      tx.executeSql("CREATE TABLE faculty(id,name,field,content,image)");
      tx.executeSql("CREATE TABLE graduates(id,name,content,image)");
    }
    /*============================Populate Tables=====================================*/
    /* Parameters ID,Title,Content,Image */
    /*Encode Stuff Please
    &#39; ---- '
    &#8220; ---- "
    */
    function populateNewsDb(tx){
      tx.executeSql('INSERT INTO news VALUES (1, "ETSU students win AppHack", "ETSU seniors, Tyler Huskins, Jared Light, and Elizabeth Turbyfield win Appalachian State University&#39;s hacking event &#8220;AppHack&#8220; Within 24 hours they produced a working rootkit and won 1st place, aswell as a women in computing award.", "img/apphack.jpg")');
      tx.executeSql('INSERT INTO news VALUES (2, "ETSU named top school in Tennessee for Computer Science", "ETSU was declared the best school in Tennessee for Computer Science from www.computer-science-schools.com", "img/etsutop.jpg")');
      tx.executeSql('INSERT INTO news VALUES (3, "News Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.", "img/placeholder.png")');
    }

    /* Parameters ID,Title,Content,Image */
    function populateEventsDb(tx){
      tx.executeSql('INSERT INTO events VALUES (1, "Summer 2017 Code and Technology Camp", "East Tennessee State University&#39;s Department of Computing, the Niswonger Foundation, and AccelNow provide Code and Technology Summer Camps in the East Tennessee region for students in the 5-12th grade. These camps provide instruction and direction to allow students explore coding and technology.  For more information contact Matthew Desjordens (desjordens@etsu.edu)","img/codecamp.jpg")');
      tx.executeSql('INSERT INTO events VALUES (2, "Graduation Lunch at Wild Wings Cafe", "Senior computing students were invited to lunch at Wild Wings Cafe before graduation!", "img/lunch.jpg")');
      tx.executeSql('INSERT INTO events VALUES (3, "Snowball fight sponsored by ETSU", "In an effort to get Computing students out of their dorm.  Dr Jarmin has sponsored a team for the annual ETSU snowball fight. Until there was a record setting 32 sunburns, their pale skin had a tactical advantage.  In the end, Team Goat brought home the gold.  Congrats guys!", "img/snow.jpg")');
      tx.executeSql('INSERT INTO events VALUES (4, "CSCI/Nursing Speed Dating", "The dean of Nursing and CSCI decided to play matchmaker between the two departments.  No matches were found.  The CSCI dean decided it would be better if we saw different buildings.  There will be another attempt next year.", "img/dating.jpg")');
    }

    /* Parameters ID,Department,Content */
    function populateAcademicsDb(tx){
      tx.executeSql('INSERT INTO academics VALUES (1, "Computer Science", "Computing is a major in which you do lots of coding and stuff and its really cool and stuff.","img/code.png")');
      tx.executeSql('INSERT INTO academics VALUES (2, "Information Technology", "Information Technology is a major in which you do lots of techy stuff and its really cool and stuff.","img/terminal.png")');
      tx.executeSql('INSERT INTO academics VALUES (3, "Information Systems", "Information Systems is a major in which you do lots of informative systems stuff and its really cool and stuff.","img/computer.png")');
    }

    /* Parameters ID,Name,Field,Content,Image */
    function populateFacultyDb(tx){
      tx.executeSql('INSERT INTO faculty VALUES (1, "Dr. Marty Barrett", "Graduate Studies", "Dr. Barrett is the best professor there ever was. He teaches Software Engineering and Operation Systems. He is the kind of professor you wanna go get a beer with.", "img/test.jpg")');
      tx.executeSql('INSERT INTO faculty VALUES (2, "Dr. Mike Lehrfeld", "Information Assurance", "Dr. Mike Lehrfeld saves us from the big bad interwebs. He also probably installed backdoors into all our machines.", "img/lehrfeld.jpg")');
    }

    /* Parameters ID,Name,Content,Image */
    function populateGraduatesDb(tx){
      tx.executeSql('INSERT INTO graduates VALUES (1, "Edward Ho", "This guy is super awesome and sold his company to Twitter.  Then he threw money at our department because he was nice.", "img/edward.jpg")');
      tx.executeSql('INSERT INTO graduates VALUES (2, "Alex Perry", "Graduated in the Fall of 2016 and now works for Eastman. May or may not be a male model.", "img/alex.jpg")');
    }

    function txError(error){
      console.log(error);
      console.log("Database error: " + error);
    }

    function txSuccess(){
      console.log("Success");
    }

});
