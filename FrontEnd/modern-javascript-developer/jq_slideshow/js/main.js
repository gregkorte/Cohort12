'use strict';

let $ = require('jquery'),
    images,
    stop = false;

let runSlideShow = () => {
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        setTimeout(function(){
            $('#slideshow').hide();
            $('#slideshow > img').attr('src', `${image.url}`);
            $('#slideshow > img').attr('id', `image_${image.id}`);
            $('#slideshow > h3').html(`${image.caption}`);
            $('#slideshow').fadeIn(2000).delay(4000).fadeOut(2000);
        }, 8000 * i);
    }
};

let getImages = () => {
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: `./data.json`
        })
        .done((images) => {
            resolve(images);
        })
        .fail((error) => {
            reject(error);
        });
    });
};

getImages()
.then((imgObj) => {
    images = imgObj.images;
    runSlideShow();
});