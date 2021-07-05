let container = document.getElementById("container");
//container.innerHTML = "<p>Test</p>";
function addDiv() {
    let div = document.createElement('div');
    div.classList.add('etch');
    //div.setAttribute('style', 'border : 3px solid white; background : grey; width : 40px; height : 40px');
    
    container.appendChild(div);
}
for (let i = 0; i< 256; i++){
    addDiv();
}