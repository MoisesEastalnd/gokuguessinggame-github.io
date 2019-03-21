



const targetNumber = 22;

$("#number-to-guess").text(targetNumber);

let counter = 0;

const numberOptions =[3, 9, 10, 15];


for(let i = 0; i < numberOptions.length; i++){


    let imageRiceball = $("<img>");

    let imageFusionearring = $("<img>");

    let imageSenzubeans = $("<img>");

    let imageDragonballs = $("<img>");



    imageRiceball.addClass("riceball");

    imageFusionearring.addClass("fusionearring");

    imageSenzubeans.addClass("senzuearring");

    imageDragonballs.addClass("dragonballs");




    imageRiceball.attr("src", "https://t00.deviantart.net/yA_MNBWJL6TmbIv7SyqJjRmGx-s=/fit-in/300x900/filters:no_upscale():origin()/pre00/249d/th/pre/i/2012/175/7/9/rice_balls__a_noruto_drabble_by_littleblackwolfpup-d54r9b9.png");

    imageFusionearring.attr("src", "https://pm1.narvii.com/5746/063d1d77b98976c2f66dbbeae1bca89ae5920ae6_hq.jpg");

    imageSenzubeans.attr("src", "https://thedaoofdragonball.com/wp-content/uploads/2013/09/senzu-beans-explained-dbz.jpg");

    imageDragonballs.attr("src", "https://vignette.wikia.nocookie.net/dragonball/images/a/ac/61.png/revision/latest?cb=20091112120043");




    imageRiceball.attr("data-riceballvalue", numberOptions[i]);

    imageFusionearring.attr("data-fusionearring",numberOptions[i]);

    imageSenzubeans.attr("data-senzubeans", numberOptions[i]);

    imageDragonballs.attr("data-dragonball", numberOptions[i]);

    $("#dbzItems").append(imageRiceball, imageFusionearring, imageSenzubeans,imageDragonballs);
}



$(".imageRiceball", ".imageFusionearring",".imageSenzubeans",".imageDragonballs").on("click", function(){

    const dbzItemsValue = ($(this).attr("data-riceballvalue","date-fustionearring","data-senzubeans","data-dragonballs"));
    dbzItemsValue = parteIent(dbzItemsValue);

    counter += dbzItemsValue;

    alert("Your power level is:"  +  counter);

    if (counter === targetNumber) {
        alert("Power Level Achived Victory!!!");
    }

    else if (counter >= targetNumber){
        alert ("Oh no, Goku Died!!!");
    }
});