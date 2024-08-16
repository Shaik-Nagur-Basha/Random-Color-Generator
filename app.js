function main(){
    const colors = [];
    rgbValues();

    const colorCodes = document.getElementsByClassName("colorCode");
    const color = document.getElementsByClassName('color');
    colorCodeAssign();
    divColors();

    function rgbValues() {
        for (let i=0; i<7; i++){
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            colors[i]=`rgb(${r}, ${g}, ${b})`;
        }
        // console.log(colors);
    }

    function colorCodeAssign() {
        for (let i=0; i<7; i++){
            colorCodes[i].innerText = `${colors[i]}`;
        }
    }

    function divColors() {
        for (let i=0; i<7; i++){
            color[i].style.backgroundColor = `${colors[i]}`;
        }
    }
}