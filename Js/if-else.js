
function third(i) {
    if(i % 9 == 0){
        console.log("Clap");
        console.log("Clap"); 
    }else if(i % 3 == 0){
        console.log("Clap");
    }else {
        console.log("Pass");
    }
}

third(9);
third(11);