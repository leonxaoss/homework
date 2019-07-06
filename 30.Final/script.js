document.addEventListener('DOMContentLoaded', function () {

    const btnAdd = document.querySelector('.add_contacts');
    const btnAll = document.querySelector('.all_contacts');
    const contactNone = document.querySelector('.contact_none');
    const contactAdd = document.querySelector('.form_add');
    const notebookContact = document.querySelector('.notebook_contact');
    const contactBlock = document.querySelector('.contact_block');
    const contactInfoBlock = document.querySelector('.contact_info_block');
    const contactInfoBlockTemp = document.querySelector('.show_contact').innerHTML;
    const telContactTemp = document.querySelector('.tel_contact').innerHTML;
    const contactTemp = document.querySelector('.contact_temp').innerHTML;
    const contactFormTemp = document.querySelector('.form_contact').innerHTML;
    const notebookContainer = document.querySelector('.notebook_container');
    const birthdayBlock = document.querySelector('.birthday_block');
    const birthdayContainer = document.querySelector('.birthday_container');
    const birthdayTemp = document.querySelector('.birthday_template').innerHTML;

    let editId;

    let arrLoc = [];

    function writeToLocalSt(){
        localStorage.setItem('MyArr', JSON.stringify(arrLoc));
    }

    function closeClearBlock() {
        contactNone.classList.remove('notebook_content--active');
        contactAdd.classList.remove('notebook_content--active');
        notebookContact.classList.remove('notebook_content--active');
        contactInfoBlock.classList.remove('notebook_content--active');

        contactBlock.innerHTML = '';
        contactInfoBlock.innerHTML = '';
        contactAdd.innerHTML = '';
    }

    function chekContact() {
        if(localStorage.MyArr){

            closeClearBlock();

            notebookContact.classList.add('notebook_content--active');

            arrLoc = JSON.parse(localStorage.getItem('MyArr'));



            arrLoc.forEach(function (item) {
                renderContact(item);
            });

        } else {
            closeClearBlock();
            contactNone.classList.add('notebook_content--active');
        }
    }

    chekContact();

    function renderContact(elem) {

        // console.log(elem);

        contactBlock.innerHTML = contactBlock.innerHTML + contactTemp.replace('{{id}}', elem.id)
            .replace('{{firstName}}', elem.firstName)
            .replace('{{surName}}', elem.surName)
            .replace(/{{tel}}/g, elem.tel[0])
            .replace('{{srcImg}}', elem.avatar ? '<img src="'+ elem.avatar +'">' : '');
    }

    function renderBirthday(elem) {
        birthdayContainer.innerHTML = birthdayContainer.innerHTML + birthdayTemp.replace('{{firstName}}', elem.firstName)
            .replace('{{surName}}', elem.surName)
            .replace('{{srcImg}}', elem.avatar ? '<img src="'+ elem.avatar +'">' : '');
    }

    function chekBirthday(elem) {
        return (new Date(elem.born).getDate().toString() + new Date(elem.born).getMonth()) === (new Date().getDate().toString() + new Date().getMonth());
    }

    if(localStorage.MyArr){
        arrLoc.forEach(function (item) {
            if(chekBirthday(item)){
                birthdayBlock.classList.add('birthday_block--active');
                renderBirthday(item);
            }
        });
    }

    function renderShowContact(elem) {

        contactInfoBlock.innerHTML = '';

        let strA = '';

        elem.tel.forEach(function (item) {
            strA += '<a href="tel:'+ item +'">'+ item +'</a>'
        });

        contactInfoBlock.innerHTML = contactInfoBlock.innerHTML + contactInfoBlockTemp.replace('{{id}}', elem.id)
            .replace('{{firstName}}', elem.firstName)
            .replace('{{surName}}', elem.surName)
            .replace('{{srcImg}}', elem.avatar ? '<img src="'+ elem.avatar +'">' : '')
            .replace('{{contactText}}', elem.text)
            .replace('{{contactTel}}', strA)
            .replace('{{dataBorn}}', elem.born);
    }

    function renderFormContact(elem) {

        if(elem){
            let strA = '';

            elem.tel.forEach(function (item) {
                strA += '<div class="box_input"><h3>Телефон *</h3><input type="number" placeholder="" class="input_tel item_required" value="' + item + '"><label class="label_error">Поле не може бути пустим</label><div class="close_tel">x</div></div>'
            });

            contactAdd.innerHTML = contactAdd.innerHTML + contactFormTemp.replace('{{id}}', elem.id)
                .replace('{{firstName}}', elem.firstName)
                .replace('{{surName}}', elem.surName)
                .replace('{{srcImg}}', elem.avatar ? '<img src="'+ elem.avatar +'">' : '')
                .replace('{{activeFile}}', elem.avatar ? 'box_file--dis' : '')
                .replace('{{activeImg}}', elem.avatar ? 'box_img--active' : '')
                .replace('{{contactText}}', elem.text)
                .replace('{{contactTel}}', strA)
                .replace('{{dataBorn}}', elem.born);
        } else {
            let strA = '<div class="box_input"><h3>Телефон *</h3><input type="number" placeholder="" class="input_tel item_required" value=""><label class="label_error">Поле не може бути пустим</label><div class="close_tel">x</div></div>'

            contactAdd.innerHTML = contactAdd.innerHTML + contactFormTemp.replace('{{firstName}}', '')
                .replace('{{surName}}', '')
                .replace('{{srcImg}}','')
                .replace('{{activeFile}}','')
                .replace('{{activeImg}}', '')
                .replace('{{contactText}}', '')
                .replace('{{contactTel}}', strA)
                .replace('{{dataBorn}}', '');
        }



    }

    function checkValue(selector) {
        return [].every.call(document.querySelectorAll(selector),function (item) {
            return item.value !== '';
        });
    }

    function checkError(selector) {
        document.querySelectorAll(selector).forEach(function (item) {
            if(item.value === ''){
                item.classList.add('item-error');
            } else {
                item.classList.remove('item-error');
            }
        })
    }

    function clearValue(selector) {
        document.querySelectorAll(selector).forEach(function (item) {
            item.value = '';
        })
    }

    function addFoto (){
        const boxFile = document.querySelector('.box_input__file .box_file');
        const boxImg = document.querySelector('.box_input__file .box_img');

        const file = document.querySelector('#input_img');

        file.addEventListener('change', function () {
            const reader = new FileReader();

            reader.readAsDataURL(this.files[0]);
            reader.onload = function () {
                boxFile.classList.add('box_file--dis');
                boxImg.classList.add('box_img--active');

                const img = document.createElement('img');

                img.src = reader.result;
                boxImg.appendChild(img);

            };
        });
    }

    btnAdd.addEventListener('click', function () {

        closeClearBlock();

        contactAdd.classList.add('notebook_content--active');

        renderFormContact();

        addFoto();
    });

    btnAll.addEventListener('click', function () {

        chekContact();

    });

    notebookContainer.addEventListener('click', function (event) {
        const target = event.target;

        // add new tel

        if(target.closest('.btn_add_tel')){

            const telBox = document.querySelector('.block_input--tel');
            const div = document.createElement('div');

            div.classList.add('box_input');
            div.innerHTML = telContactTemp;

            telBox.appendChild(div);
            // telBox.insertBefore(div, telBox.lastElementChild);

        }

        // remove tel

        if(target.classList.contains('close_tel')){

            target.parentNode.remove();

        }

        // remove img

        if(target.classList.contains('delete_img')){

            document.querySelector('.block_input .box_file').classList.remove('box_file--dis');
            document.querySelector('.block_input .box_img').classList.remove('box_img--active');
            document.querySelector('.block_input .box_img img').remove();

        }

        // save contact

        if(target.closest('.btn_save')){


            checkError('.item_required');

            if(checkValue('.item_required')){

                const img = document.querySelector('.box_img img');

                const arrTel = [];

                document.querySelectorAll('.input_tel').forEach(function (item) {
                    arrTel.push(item.value);
                });

                if(editId){

                    let index = arrLoc.findIndex(function (item) {
                        return item.id === +editId;
                    });

                    arrLoc[index].firstName = document.querySelector('.input_name').value;
                    arrLoc[index].surName = document.querySelector('.input_surname').value;
                    arrLoc[index].born = document.querySelector('.input_born').value;
                    arrLoc[index].tel = arrTel;
                    arrLoc[index].text = document.querySelector('.text_other').value;

                    if(img){
                        arrLoc[index].avatar = img.src;
                    } else {
                        delete arrLoc[index].avatar
                    }

                    writeToLocalSt();

                    closeClearBlock();

                    contactInfoBlock.classList.add('notebook_content--active');

                    renderShowContact(arrLoc[index]);

                    editId = 0;

                } else {

                    const newId = new Date().getTime();

                    const data = {
                        id: newId,
                        firstName: document.querySelector('.input_name').value,
                        surName: document.querySelector('.input_surname').value,
                        born: document.querySelector('.input_born').value,
                        tel: arrTel,
                        text: document.querySelector('.text_other').value
                    };

                    if(img){
                        data.avatar = img.src;
                    }

                    arrLoc.push(data);

                    writeToLocalSt();

                    // show before create

                    closeClearBlock();

                    contactInfoBlock.classList.add('notebook_content--active');

                    let elem = arrLoc.find(function (item) {
                        return item.id === +newId;
                    });

                    renderShowContact(elem);

                }


            }

        }

        // remove contact
        if(target.closest('.contact_btn--delete')){

            let index = arrLoc.findIndex(function (item) {
                return item.id === +target.closest('.contact_id').id;
            });

            arrLoc.splice(index, 1);

            target.closest('.contact_id').remove();

            if(JSON.stringify(arrLoc) !== '[]'){
                writeToLocalSt();

                closeClearBlock();
                notebookContact.classList.add('notebook_content--active');
                arrLoc = JSON.parse(localStorage.getItem('MyArr'));
                arrLoc.forEach(function (item) {
                    renderContact(item)
                });
            } else {
                localStorage.removeItem('MyArr');

                closeClearBlock();
                contactNone.classList.add('notebook_content--active');
            }


        }

        // view contact


        if(target.closest('.contact_btn--show')){

            closeClearBlock();

            contactInfoBlock.classList.add('notebook_content--active');

            let elem = arrLoc.find(function (item) {
                return item.id === +target.closest('.contact_box').id;
            });

            renderShowContact(elem);

        }

        // edit contact


        if(target.closest('.contact_btn--edit')){

            let index = arrLoc.findIndex(function (item) {
                return item.id === +target.closest('.contact_id').id;
            });

            editId = arrLoc[index].id;

            closeClearBlock();

            contactAdd.classList.add('notebook_content--active');

            renderFormContact(arrLoc[index]);

            addFoto();
        }

    });


    const inputSearch = document.querySelector('.input_search');

    inputSearch.addEventListener('input', function () {
        const value = this.value.toLowerCase();

        closeClearBlock();

        notebookContact.classList.add('notebook_content--active');

        arrLoc.forEach(function (item) {

            let telStr = item.tel.join();

            if(item.firstName.toLowerCase().indexOf(value) !== -1 || item.surName.toLowerCase().indexOf(value) !== -1 || telStr.indexOf(value) !== -1){
                renderContact(item);
            }

        })
    });



});
