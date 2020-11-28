function back(){
    var exp = document.calc.txt.value;
    if(exp){
        document.calc.txt.value = exp.substring(0,exp.length-1);
    }
}