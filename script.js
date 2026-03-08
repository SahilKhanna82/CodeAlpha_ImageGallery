let img=document.querySelectorAll(".slide");
let cancel=document.querySelector("#cancel");
let prev=document.querySelector("#prev");
let next=document.querySelector("#next");
let lightbox=document.querySelector("#lightbox");
let lightboxImg=document.querySelector("#lightbox-img");
let currIndex=0;
img.forEach((image,index)=>{
    image.addEventListener("click",()=>{
        lightboxImg.classList.remove("zoom");
        void lightboxImg.offsetWidth;
        lightboxImg.classList.add("zoom");

        lightbox.style.display="flex";

        lightboxImg.src=image.src;
        currIndex=index;
    })
})
cancel.addEventListener("click",()=>{
    
    lightbox.style.display="none";
})
prev.addEventListener("click",()=>{
    currIndex--;
    if(currIndex<0){
        currIndex=img.length-1;
    }
    lightboxImg.src=img[currIndex].src;
    lightboxImg.classList.remove("zoom");
    void lightboxImg.offsetWidth;
    lightboxImg.classList.add("zoom");

})
     
next.addEventListener("click",()=>{
    currIndex++;
    if(currIndex>=img.length){
        currIndex=0;
    }
    lightboxImg.src=img[currIndex].src;
    lightboxImg.classList.remove("zoom");
    void lightboxImg.offsetWidth;
    lightboxImg.classList.add("zoom");

})
     


