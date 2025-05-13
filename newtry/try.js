function api(){
    const h1 = document.createElement('H1');
    h1.textContent = "It is simple JS file";
    h1.style.color = '#155263'
    document.body.appendChild(h1);
    const button1 = document.createElement('button');
    button1.textContent = 'GREEN';
    button1.style.color = 'green';
    button1.addEventListener('click',()=>{
        h1.style.color = 'green';
    });
    document.body.appendChild(button1);
    const button2 = document.createElement('button');
    button2.textContent = 'RED';
    button2.style.color = 'red';
    button2.addEventListener('click',()=>{
        h1.style.color = 'red';
    });
    document.body.appendChild(button2);
    const button3 = document.createElement('button');
    button3.textContent = 'BLUE';
    button3.style.color = 'blue';
    button3.addEventListener('click',()=>{
        h1.style.color = 'blue';
    });
    document.body.appendChild(button3);
}