// get mouse position
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
    console.log('test')
    if (item.classList.contains('clicked')) {
        item.classList.remove('clicked');
        console.log('test1')
        return;
    }
    else if(document.querySelector(".clicked")) {
        document.querySelector(".clicked").classList.remove('clicked');
    }
    item.classList.add('clicked')
}))

document.addEventListener("click", (e) => {
    const openedElement = document.querySelector(".clicked");
    let clickedElement = e.target.id; // clicked element 
    console.log(e.target.id)
    console.log(`opened:${openedElement.id} clicked:${clickedElement}`)     
  
    if (clickedElement != openedElement.id) {
        openedElement.classList.remove('clicked');
    }
  });




