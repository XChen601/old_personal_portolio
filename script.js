const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}


for(const item of document.querySelectorAll(".item")) {
    item.onmousemove = e => handleOnMouseMove(e);
}

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', function (e) {
    
    if (item.classList.contains('clicked')) {
        item.classList.remove('clicked');
    }
    else item.classList.add('clicked')
}))

items.forEach(item => item.addEventListener('click', function (e) {
}))



