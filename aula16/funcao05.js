//Recursividade -> Uma função que chama ela mesma.
function fatorial(n){
    if(n === 1){
        return 1;
    }else{
        return n * fatorial(n-1); // Chamando ela mesma
    }
}

console.log(fatorial(4));

