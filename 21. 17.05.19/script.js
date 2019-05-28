window.addEventListener('load', function () {

    function Slider(selector) {

        this.slider = document.querySelector(selector);
        this.slider.classList.add('slider');

        let sliderArr;
        let arrPrev;
        let arrNext;

        for(let i = 0; i < this.slider.children.length; i++){
            let sliderChild = this.slider.children[i];

            if(sliderChild.classList.contains('slider_box')){
                sliderArr = this.slider.children[i].children;
            }
            if(sliderChild.classList.contains('slider_arrow--prev')){
                arrPrev = this.slider.children[i];
            }
            if(sliderChild.classList.contains('slider_arrow--next')){
                arrNext = this.slider.children[i];
            }
        }

        sliderArr[0].classList.add('slide--active');

        arrPrev.addEventListener('click', function () {
            for(let i = 0; i < sliderArr.length; i++){
                if(sliderArr[i].classList.contains('slide--active') && sliderArr[i].previousElementSibling){
                    sliderArr[i].previousElementSibling.classList.add('slide--active');
                    sliderArr[i].classList.remove('slide--active');
                    break;
                }
                if(sliderArr[i].classList.contains('slide--active') && !sliderArr[i].previousElementSibling){
                    sliderArr[sliderArr.length - 1].classList.add('slide--active');
                    sliderArr[i].classList.remove('slide--active');
                    break;
                }
            }
        });

        arrNext.addEventListener('click', function () {
            for(let i = 0; i < sliderArr.length; i++){
                if(sliderArr[i].classList.contains('slide--active') && sliderArr[i].nextElementSibling){
                    sliderArr[i].nextElementSibling.classList.add('slide--active');
                    sliderArr[i].classList.remove('slide--active');
                    break;
                }
                if(sliderArr[i].classList.contains('slide--active') && !sliderArr[i].nextElementSibling){
                    sliderArr[0].classList.add('slide--active');
                    sliderArr[i].classList.remove('slide--active');
                    break;
                }
            }
        })
    }

    const slider1 = new Slider('.slider1');
    const slider2 = new Slider('.slider2');


    // const sliderSlide = document.querySelectorAll('.slide');
    // const arrPrev = document.querySelector('.slider_arrow--prev');
    // const arrNext = document.querySelector('.slider_arrow--next');
    //
    // sliderSlide[0].classList.add('slide--active');
    //
    // arrPrev.addEventListener('click', function () {
    //     for(let i = 0; i < sliderSlide.length; i++){
    //         if(sliderSlide[i].classList.contains('slide--active') && sliderSlide[i].previousElementSibling){
    //             sliderSlide[i].previousElementSibling.classList.add('slide--active');
    //             sliderSlide[i].classList.remove('slide--active');
    //             break;
    //         }
    //         if(sliderSlide[i].classList.contains('slide--active') && !sliderSlide[i].previousElementSibling){
    //             sliderSlide[sliderSlide.length - 1].classList.add('slide--active');
    //             sliderSlide[i].classList.remove('slide--active');
    //             break;
    //         }
    //     }
    // });
    // arrNext.addEventListener('click', function () {
    //     for(let i = 0; i < sliderSlide.length; i++){
    //         if(sliderSlide[i].classList.contains('slide--active') && sliderSlide[i].nextElementSibling){
    //             sliderSlide[i].nextElementSibling.classList.add('slide--active');
    //             sliderSlide[i].classList.remove('slide--active');
    //             break;
    //         }
    //         if(sliderSlide[i].classList.contains('slide--active') && !sliderSlide[i].nextElementSibling){
    //             sliderSlide[0].classList.add('slide--active');
    //             sliderSlide[i].classList.remove('slide--active');
    //             break;
    //         }
    //     }
    // })

});
