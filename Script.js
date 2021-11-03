var outputScreen = document.getElementById("Calc-Output");
function Display(n){
outputScreen.value += n;
}
function Clear(){
outputScreen.value = '';
}
function Del(){
outputScreen.value = outputScreen.value.slice(0,-1);
}
function Calculate(n){
    try {
    outputScreen.value = eval(outputScreen.value);
    } catch (error) {
        alert("Invalid Input ")
        
    }

}
