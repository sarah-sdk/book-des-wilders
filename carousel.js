
function createPictures (source, legend,classPromo){
    const picture = document.createElement("img");
    picture.src = source;
    picture.alt = legend;
    picture.className=classPromo;
    return picture
}

const pictures =[
    {
        src: "./images/_MG_7981.jpg",
        alt: "photo de groupe DATA",
        className:"promoData",
        id: 0
        
    },
    {
        src: "./images/_MG_7992.jpg",
        alt: "photo de groupe TSSR",
         className:"promoTssr",
         id: 1

    },
    {
        src: "./images/_MG_8000.jpg",
        alt: "photo de groupe DEV",
         className:"promoDev",
         id: 2 
    }
]

const main = document.querySelector ("main");
const container =  document.createElement ("aside");
main.prepend(container);

container.appendChild(createPictures(pictures[2].src, pictures[2].alt, pictures[2].className));
    


const rightButton = document.createElement("button");
container.appendChild(rightButton);
rightButton.addEventListener("click",function(){
    if (container.children[0].id===pictures.length){
        container.children[0]
    }
});










