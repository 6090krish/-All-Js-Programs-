let tr='';
const addData=(i)=>{
    tr += i;
    document.getElementById("no").value =tr;
}

function getAns(){
    let data = document.getElementById("no").value;
    let ans = eval(data);
    document.getElementById("no").value = ans;
    tr ='';
}

function clearAll(){
document.getElementById("no").value =0;
tr ='';

}