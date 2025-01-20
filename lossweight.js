const slider = document.getElementById('eg-slider');

function egSwitchMode(mode) {
    const body = document.body;

    if (mode === 'light') {
        body.style.backgroundColor = '#f4f4f4'; 
        body.style.color = '#000'; 
        slider.value = slider.min; 
    } else if (mode === 'dark') {
        body.style.backgroundColor = '#333'; 
        body.style.color = '#fff'; 
        slider.value = slider.max; 
    }
}

slider.addEventListener('input', () => {
    const value = slider.value; 
    const body = document.body; 
    if (value < 50) {
        body.style.backgroundColor = '#f4f4f4'; 
        body.style.color = '#000';
    } else {
        body.style.backgroundColor = '#333'; 
        body.style.color = '#fff';
    }
});
