$(document).ready(function() {

    var nounArr = ["Santa Claus", "Doja Cat", "the president", "a dog", "a bird"];

    var verbArr = ["barely run", "cough uncontrollably", "fall", "take a nap", "sip some tea"];

    var adjArr = ["beautiful", "slimy", "trash", "hilarious", "boring"];

    var placeArr = ["Saturn", "Mickey Ds", "Austin, Texas"];

    $("button").click(function() {
        $(".noun").each(function() {
            var nounRand = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[nounRand]);
        });  
    });

    $("button").click(function() {
        $(".verb").each(function() {
            var verbRand = Math.floor(Math.random() * verbArr.length);
            $(this).text(verbArr[verbRand]);
        });
    });

    $("button").click(function() {
        $(".adj").each(function() {
            var adjRand = Math.floor(Math.random() * adjArr.length);
            $(this).text(adjArr[adjRand]);
        });  
    });

    $("button").click(function() {
        $(".verb").each(function() {
            var placeRand = Math.floor(Math.random() * placeArr.length);
            $(this).text(placeArr[placeRand]);
        });
    });
});