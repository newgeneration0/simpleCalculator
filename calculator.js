const results = document.getElementById("results");

function toDisplay(input){
    results.value += input;
}

function backSpace(){
    const bks = results.value;
    results.value = bks.substring(0, bks.length -1);
}

function percentage(){

}

function clr(){
    results.value = ""
}

function solve(){
    try{
        results.value = eval(results.value)
    }catch(error){
        results.value ="error"
    }
}
