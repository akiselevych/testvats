const looksSlider = new Swiper(".looksSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 15,
});

function handleReqOpen() {
    const cont = document.querySelector(".requirements__bottom");
    const icon = document.querySelector(".requirements__arrow");

    cont.classList.toggle("requirements__open_text")
    icon.classList.toggle("requirements__open")
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://dev.gent-code.com/api/vatsak/callback`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target[0].value,
            phone: e.target[1].value
        })
    }).then(res => {
        e.target[0].value = '';
        e.target[1].value = '';
        if (res.status === 200) {
            document.querySelector(".form__sent").classList.toggle("form__sent__active");
            setTimeout(() => {
                document.querySelector(".form__sent").classList.toggle("form__sent__active");
            }, 2000)
        }
    })
}

const phone = document.getElementById("phone");
phone.addEventListener("input", handlePhone)

function handlePhone(e) {
    e.target.value = e.target.value.replace(/\D/g, '')
}

function toggleOpenVideo(){
    const video = document.querySelector('.video__modal');
    video.classList.toggle('open');

    document.body.style.overflow = video.classList.contains('open') ? 'hidden' : 'auto';
}