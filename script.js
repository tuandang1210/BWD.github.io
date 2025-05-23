const bar = document.getElementById('bar');
const nav = document.querySelector('.nav');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

const close = document.getElementById('close');
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}