const parentMarquee = document.querySelector(".marquee-wrapper") as HTMLInputElement;
const childMarquee = document.querySelector(".marquee-content") as HTMLInputElement;
const adChildMarquee= (document.querySelector(".marquee-content") as HTMLInputElement).cloneNode(true);

parentMarquee.appendChild(adChildMarquee);

const ulParentListContainer = document.querySelector('.marquee-wrapper') as HTMLInputElement
let isDragging = false;

const dragStart = (e: MouseEvent) => {
    if (!isDragging) return;
    ulParentListContainer.scrollLeft -= e.movementX    
}



const stopDragging = () => {
    isDragging = false;
}

ulParentListContainer.addEventListener('mousedown', () => isDragging = true)
ulParentListContainer.addEventListener('mousemove', dragStart)
window.addEventListener('mouseup', stopDragging)