function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                   
    
    return (total / qtd).toFixed(2);
}

function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado += nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
}


(function(){
    var $paragrafos = document.querySelectorAll('p');
    
    for(var i = 0; i < $paragrafos.length; i++){
        var temJS = $paragrafos[i].textContent.toLowerCase().indexOf('javascript') >= 0;
        
        $paragrafos[i].className = temJS ? 'destaque' : '';
    }
    
    function formataParagrafos(texto){
        var arr = texto.split(' ');
        
        if(arr.length > 10){
            
            return arr.slice(0, 10).join(' ')+'...';  
        }
        
        return texto;
    }
    
    
    
})();
