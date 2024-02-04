
const chatIcon = document.createElement('div');
chatIcon.style.position = 'fixed';
chatIcon.style.right = '20px';
chatIcon.style.bottom = '20px';
chatIcon.style.width = '50px';
chatIcon.style.height = '50px';
chatIcon.style.borderRadius = '50%';
chatIcon.style.borderStyle = 'solid';
chatIcon.style.borderColor = '#D3AC2B';
chatIcon.style.borderWidth = '5px'
chatIcon.style.backgroundColor = '#333D51';
chatIcon.style.color = 'white';
chatIcon.style.textAlign = 'center';
chatIcon.style.lineHeight = '50px';
chatIcon.style.fontSize = '30px';
chatIcon.style.cursor = 'pointer';
chatIcon.innerHTML = '💬';

document.body.appendChild(chatIcon);

chatIcon.addEventListener('click', () => {
    window.location.href = "https://t.me/freecodingtour";
});
