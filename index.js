let movies=[
    {
    name: "Falcon and the winter solider",
    des :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum ducimus perferendis totam distinctio natus consequuntur illum nam at harum officia cumque, veritatis, corrupti saepe corporis odit nulla mollitia amet.",

       Image: "images/slider 2.png"
    },
    {
        name: "Loki",
        des: 
           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum ducimus perferendis totam distinctio natus consequuntur illum nam at harum officia cumque, veritatis, corrupti saepe corporis odit nulla mollitia amet.",
        Image: "images/slider 1.png"
    },
    {
        name: "Wanda vision",
        des: 
           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum ducimus perferendis totam distinctio natus consequuntur illum nam at harum officia cumque, veritatis, corrupti saepe corporis odit nulla mollitia amet.",
        Image: "images/slider 3.png"
    },
    {
        name: "Raya and the dargon",
        des: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum ducimus perferendis totam distinctio natus consequuntur illum nam at harum officia cumque, veritatis, corrupti saepe corporis odit nulla mollitia amet",
        Image: "images/slider 4.png"
    },
    {
        name: "Luca",
        des: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum ducimus perferendis totam distinctio natus consequuntur illum nam at harum officia cumque, veritatis, corrupti saepe corporis odit nulla mollitia amet",
        Image: "images/slider 5.png"
    }
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0; //track the current slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    // create DOM elements

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content); // Adding content to the slide
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up images
    imgElement.src = movies[slideIndex].Image;
    slideIndex++;

    // setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}%  - ${
            30 * (sliders.length - 2)
        }px)`;
    }
};
for(let i=0;i<3;i++)
{
    createSlide();
}

// Call createSlide function after a certain interval
setInterval(()=>{
    createSlide();
}, 3000) // For example, create a new slide every 3 seconds (adjust as needed)

//video cards

const videoCards= [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        let video =item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video= item.children[1];
        video.pause();
    })
})

//card sliders

let cardcontainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];

cardcontainers.forEach((item,i)=> {
    let containerDimensions= item.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth-200;

    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth-200;

    })


})

