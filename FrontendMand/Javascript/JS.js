// creating the json files for the movies here
var Movie1Obj = {
    "title": "Avengers Infinity War",
    "YTID": "6ZfuNTqbHE8"
};
var Movie1JSON = JSON.stringify(Movie1Obj);

var Movie2Obj = {
    "title": "Doctor Strange",
    "YTID": "HSzx-zryEgM"
};
var Movie2JSON = JSON.stringify(Movie2Obj);

var Movie3Obj ={
    "title": "Avengers Endgame",
    "YTID": "TcMBFSGVi1c"
};
var Movie3JSON = JSON.stringify(Movie3Obj)

var Movie4Obj ={
    "title": "Avengers Age of Ultron",
    "YTID": "tmeOjFno6Do"
};
var Movie4JSON = JSON.stringify(Movie4Obj);

var Movie5Obj ={
    "title": "Thor: Ragnarok",
    "YTID": "ue80QwXMRHg"
}
var Movie5JSON = JSON.stringify(Movie5Obj)

var Movies = [Movie1Obj, Movie2Obj, Movie3Obj, Movie4Obj, Movie5Obj];


function OnLoad() {
    //generates the content boxes for each movie with a title and a video thumbnail
var i;
    for (i = 0; i < Movies.length; i++){

        var datastring;

        let fetchURL = "http://www.omdbapi.com/?t=" + Movies[i].title + "&APIkey=49226b1c";
        let proxyURL = 'https://cors-anywhere.herokuapp.com/' + fetchURL; //tried using this, didnt work, so i have to
        //continue using the mode:"no-cors" which seemed to fix the issue, relatively speaking.

        fetch(fetchURL, {mode: "no-cors"})
            .then((data) =>
                 data.json() //this returns a syntax error i cant seem to fix
            )
            .then(dataJSON => {
                console.log('data: ' + dataJSON);
            })
            .catch(e => {
                console.log(e);
            });
        //i cant seem to get a proper API fetch to work, even when comparing code to that of classmates' working API fetches
        //so i must admit im totally blank on what the issue is.



        document.getElementById("ContentWrapper").innerHTML +=
            "<div class=\"Content\"> " +
            "<h3>" + Movies[i].title + "</h3>" +
            "<p>" + datastring + "</p>"
            "</div>";
        //document.getElementById('image').src = generateThumbnail(Movies[i].YTID);

        //the intention was that the forloop would generate the title and an image, and then set the src of the images to the thumbnail url
        //retrieved by the generatethumbnail function, but uuh, that didnt work
    }
}
function generateThumbnail (youtubeID){
return 'https://i3.ytimg.com/vi/' + youtubeID + '/default.jpg';
}

//run the onload function when the page loades
window.onload = OnLoad;