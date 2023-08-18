
const genmeme = document.getElementById("next")
api = "https://meme-api.com/gimme"

// this fetch was done to show up a initial meme as we go to another tab or just open up the app
fetch(api).then((response) => response.json().then(data => {
    console.log(data)
    document.getElementById("meme").src = data.url
    document.getElementById("title").innerHTML = "Title :" + data.title;
    document.getElementById("author").innerHTML = "Author :" + data.author
    document.getElementById("download1").src = data.url
}));

function generate() {

// this function was there to propogate new memes from the existing memes 
    fetch(api).then((response) => response.json().then(data => {
        console.log(data)
        document.getElementById("meme").src = data.url
        document.getElementById("title").innerHTML = "Title :" + data.title;
        document.getElementById("author").innerHTML = "Author :" + data.author
        document.getElementById("download1").src = data.url
    }));

}


function download() {
    // window.location.href=document.getElementById("download1").src
    let url = document.getElementById("download1").src
    // window open was used out to load page in new tab above method was alos be used 
    window.open(url, '_blank')
}

// this function is a part of navigation of memes 

genmeme.addEventListener("click", generate);



