const firstViewButton=document.getElementById("rootFirstView");
const secondtViewAppear=document.getElementById("rootSecondView");
const pressButton= document.getElementById("buttonOne");

function displayView(){
    /*No es conveniente usarlo por políticas de google */
   firstViewButton.style.display= "none";
   secondtViewAppear.style.display= "block";
}
export {firstViewButton, secondtViewAppear, pressButton, displayView}
