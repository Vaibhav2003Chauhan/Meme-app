const genmeme=document.getElementById("next");
const genimage=document.getElementById("meme");
const gent=document.getElementById("title");
const gena=document.getElementById("author");

const updatedetail=(url , title ,author)=>{
    genimage.setAttribute("src",url);
    gent.innerHTML="Title : "+ title;
    gena.innerHTML="Author : "+author;

}

const generate =() =>{
 fetch( "https://meme-api.com/gimme").then((response) => response.json()).then(data =>{
        updatedetail(data.url,data.title,data.author);
    });
};





genmeme.addEventListener("click",generate);


