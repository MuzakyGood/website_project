// Dragging Window
function createDragWindow(object) {
    let offsetX, offsetY;
    let isDragging = false;

    // Desktop
    object.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - object.offsetLeft;
        offsetY = e.clientY - object.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            object.style.left = `${e.clientX - offsetX}px`;
            object.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Mobile
    object.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        posX = touch.clientX - object.offsetLeft;
        posY = touch.clientY - object.offsetTop;
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            object.style.left = `${touch.clientX - posX}px`;
            object.style.top = `${touch.clientY - posY}px`;
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// Close Button in Window
function closeWindow(button, object) {
    button.addEventListener('click', () => {
        object.style.display = 'none';
    });
}

// Main code
document.addEventListener('DOMContentLoaded', () => {
    const myWin = document.getElementById('dragWindow');
    const btnClose = document.getElementById('btnClose');

    createDragWindow(myWin);
    closeWindow(btnClose, myWin);
});