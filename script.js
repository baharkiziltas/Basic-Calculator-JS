let num = document.getElementsByTagName("button");
let resultScreen = document.getElementsByClassName("resultinput")[0];
let cleanbutton = document.getElementById("clean");
let resultbutton = document.getElementById("equal");


for(let i = 0; i< num.length; i++){
     
    if(i != 14 && i !=15 ){
        num[i].addEventListener("click", write);
    } 
}

function write (){
  resultScreen.value = resultScreen.value + this.value;
}

cleanbutton.addEventListener("click", clean);
function clean(){
    resultScreen.value = " ";
}

resultbutton.addEventListener("click", operation);

function operation(){
    resultScreen.value = eval(resultScreen.value);

}
