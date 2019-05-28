window.addEventListener('load', function () {

    function Slider(selector, transform) {

        this.slider = document.querySelector(selector);
        this.slider.classList.add('slider');

        let sliderArr;
        let arrPrev;
        let arrNext;

        // const DURATION = 550;
        // let disable = true;

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

        if(transform){
            this.slider.classList.add('slider-transform');
            sliderArr[sliderArr.length - 1].classList.add('slide--prev');
            sliderArr[0].nextElementSibling.classList.add('slide--next');
        }
        
        // function disableArrow() {
        //     arrPrev.classList.add('slider_arrow--disable');
        //     arrNext.classList.add('slider_arrow--disable');
        //     disable = false;
        //
        //     setTimeout(function () {
        //         arrPrev.classList.remove('slider_arrow--disable');
        //         arrNext.classList.remove('slider_arrow--disable');
        //         disable = true;
        //     }, DURATION)
        // }


        function slidePrev(index){
            if(index === 0){
                sliderArr[sliderArr.length - 1].classList.add('slide--active');
                sliderArr[sliderArr.length - 2].classList.add('slide--prev');
                sliderArr[index].classList.add('slide--next');
            } else if(index === 1){
                sliderArr[index - 1].classList.add('slide--active');
                sliderArr[sliderArr.length - 2].classList.add('slide--prev');
                sliderArr[index].classList.add('slide--next');
            } else{
                sliderArr[index - 1].classList.add('slide--active');
                sliderArr[index - 2].classList.add('slide--prev');
                sliderArr[index].classList.add('slide--next');
            }
        }

        function slideNext(index){
            if(index === sliderArr.length - 2){
                sliderArr[index + 1].classList.add('slide--active');
                sliderArr[index].classList.add('slide--prev');
                sliderArr[0].classList.add('slide--next');
            }
            else if(index === sliderArr.length - 1){
                sliderArr[0].classList.add('slide--active');
                sliderArr[sliderArr.length - 1].classList.add('slide--prev');
                sliderArr[1].classList.add('slide--next');
            }
            else{
                sliderArr[index + 1].classList.add('slide--active');
                sliderArr[index].classList.add('slide--prev');
                sliderArr[index + 2].classList.add('slide--next');
            }
        }

        function removeSlideClass(){
            [].forEach.call(sliderArr,  elem => elem.classList.remove('slide--active', 'slide--prev', 'slide--next'));
        }

        function currentIndex(){
            return [].findIndex.call(sliderArr,  elem => elem.classList.contains('slide--active'));
        }

        function currentElem(){
            return [].find.call(sliderArr,  elem => elem.classList.contains('slide--active'));
        }


        arrPrev.addEventListener('click', function () {

            if(transform){
                const currentIdx = currentIndex();

                removeSlideClass();
                slidePrev(currentIdx);

            } else {
                const currentEl = currentElem();

                if(currentEl.previousElementSibling){

                    currentEl.previousElementSibling.classList.add('slide--active');
                    currentEl.nextElementSibling.classList.remove('slide--active');

                } else {

                    currentEl.classList.remove('slide--active');
                    sliderArr[sliderArr.length - 1].classList.add('slide--active');

                }
            }



        });

        arrNext.addEventListener('click', function () {

            if(transform){

                const currentIdx = currentIndex();

                removeSlideClass();
                slideNext(currentIdx);

            } else {

                const currentEl = currentElem();

                if(currentElem().nextElementSibling){

                    currentEl.nextElementSibling.classList.add('slide--active');
                    currentEl.classList.remove('slide--active');

                } else {

                    currentEl.classList.remove('slide--active');
                    sliderArr[0].classList.add('slide--active');

                }
            }

        })
    }

    const slider1 = new Slider('.slider1');
    const slider2 = new Slider('.slider2', true);

});
