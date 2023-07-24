var models = [

    {
        name : "BMW 418d",
        image : "img/bmw.jpg",
        link : "https://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe"
    },
    {
        name : "Mazda CX-3",
        image : "img/mazda.jpg",
        link : "https://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion"
    },
    {
        name : "Volvo S60",
        image : "img/volvo.jpg",
        link : "https://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance"
    },
    {
        name : "Skoda Superb",
        image : "img/skoda.jpg",
        link : "https://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active"
    },
    {
        name : "Honda Civic",
        image : "img/honda.jpg",
        link : "https://www.arabalar.com.tr/honda/civic/2018/1-6-elegance"
    }


];



var index = 0;
var slideCount = models.length;
var settings= {
    duration : '2000',
    random : true,

}
var interval

init(settings);


document.querySelector('.fa-circle-arrow-left').addEventListener('click',function(){
    
    index--;
    showSlide(index);
    console.log(index);

});


document.querySelector('.fa-circle-arrow-right').addEventListener('click',function(){

    index++;
    showSlide(index);
    console.log(index);

});

document.querySelectorAll('.arrow').forEach(function(item){

    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })

});

document.querySelectorAll('.arrow').forEach(function(item){

    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings) {

    var prev;
    interval = setInterval(function(){

        if (settings.random){
            // random index
            do {
                index = Math.floor(Math.random() * slideCount);
            }while(index == prev) 
            

        }else{
            // artan index

            if(slideCount == index + 1){
                index = 0;
            }
            showSlide(index);
            index++;
        }
        showSlide(index)

    },settings.duration)


}

function showSlide(i) {

    index = i;
    
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }
    
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute('src', models[index].image);

    document.querySelector(".card-link").setAttribute('href',models[index].link);


}


