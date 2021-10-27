$(document).ready(function() {

    var nounArr = ["Santa Claus", "Doja Cat", "the president", "dog", "bird"];

    var verbArr = ["run", "cough", "fall", "sit", "drink"];

    var adjArr = ["beautiful", "slimy", "hard", "funny", "boring"];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });

        $(".verb").click(function() {
            $(this).text(verbArr[randomIndex]);
        });

        $(".adj").click(function() {
            $(this).text(adjArr[randomIndex]);
        });
        
    });
});