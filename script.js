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
        return;
    }
    else if(document.querySelector(".clicked")) {
        document.querySelector(".clicked").classList.remove('clicked');
    }
    item.classList.add('clicked')
}))

document.addEventListener("click", (evt) => {
    const openedElement = document.querySelector(".clicked");
    let clickedElement = evt.target; // clicked element      
  
    if (clickedElement != openedElement) {
        openedElement.classList.remove('clicked');
    }
  });




