window.addEventListener('load', function () {

    const btn = document.querySelectorAll('.btn');
    const popUp = document.querySelectorAll('.pop_up');

    btn.forEach(function (item) {
        item.addEventListener('click', function () {

            const btnData = +item.dataset.btn;

            popUp.forEach(function (item) {

                const popData = +item.dataset.pop;

                if(btnData === popData){
                    item.classList.add('pop_up--active')
                }
            })

        })
    });

    popUp.forEach(function (item) {
        item.addEventListener('click', function (event) {

            const target = event.target;
            const currentTarget = event.currentTarget;

            if(target.classList.contains('pop_up__bg') || target.classList.contains('pop_up__close')){
                currentTarget.classList.remove('pop_up--active');
            }
        })
    });


    // з використанням делегування
    //
    // popUp.forEach(function (item) {
    //     item.addEventListener('click', function (event) {
    //
    //         let target = event.target;
    //         let currentTarget = event.currentTarget;
    //
    //         while (target !== this) {
    //             if (target.classList.contains('pop_up__bg') || target.classList.contains('pop_up__close')) {
    //                 currentTarget.classList.remove('pop_up--active');
    //                 return;
    //             }
    //             target = target.parentNode;
    //         }
    //     })
    // });

    // const popUpBg = document.querySelectorAll('.pop_up__bg');
    // const popUpClose = document.querySelectorAll('.pop_up__close');

    // popUpBg.forEach(function (item) {
    //     item.addEventListener('click', function () {
    //         let parent = item.parentNode;
    //         parent.classList.remove('pop_up--active');
    //     })
    // });
    //
    // popUpClose.forEach(function (item) {
    //     item.addEventListener('click', function () {
    //         let parent = item.parentNode.parentNode;
    //         parent.classList.remove('pop_up--active');
    //     })
    // });

});






