{
    const mainBtn = document.querySelector('.main__btn');
    const mainBlock = document.querySelector('.main__block');
    const mainBlockJson = document.querySelector('.main__block-json');
    const popup = document.querySelector('.popup');
    const form = document.forms.form;
    const data = {};

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        mainBlock.innerHTML = '';

        for (let i = 0; i < form.elements.length - 1; i++) {
            let span = document.createElement('span');
            span.innerText = `${form.elements[i].name} : ${form.elements[i].value}`;
            mainBlock.appendChild(span);

            data[form.elements[i].name] = form.elements[i].value;

            form.elements[i].value = '';
        }

        mainBlockJson.innerHTML = JSON.stringify(data);
        popup.classList.remove('popup--active');
    })

    function showPopup() {
        mainBtn.addEventListener('click', function() {
            popup.classList.add('popup--active')
        })
    }

    function closePopup() {
        popup.addEventListener('click', function(e) {
            if (e.target.classList.contains('popup__bg')) {
                popup.classList.remove('popup--active');
            }
        })
    }

    showPopup();
    closePopup();
}
