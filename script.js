$(document).ready(function() {

    var nounArr = ["Santa Claus", "Doja Cat", "the president", "dog", "bird"];

    var verbArr = ["run", "cough", "fall", "sit", "drink"];

    var adjArr = ["beautiful", "slimy", "hard", "funny", "boring"];

    $("button").click(function() {
        $(".noun").each(function() {
            var nounRand = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[nounRand]);
        });

        $(".verb").each(function() {
            var verbRand = Math.floor(Math.random() * verbArr.length);
            $(this).text(verbArr[verbRand]);
        });

        $(".adj").each(function() {
            var adjRand = Math.floor(Math.random() * adjArr.length);
            $(this).text(adjArr[adjRand]);
        });
        
    });
});