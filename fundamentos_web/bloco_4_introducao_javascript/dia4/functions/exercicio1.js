



function verificaPalindrome(a){
    let aoContrario = a.split("").reverse().join("");
    if(a == aoContrario){
        return true
    } else{
        return false
    }
}

console.log(verificaPalindrome("arara"))
