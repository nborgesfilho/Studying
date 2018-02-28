var impressora = function(){

    var instance;
    var numberOfPrints;

    function criar() {
        numberOfPrints = 0;
        function imprimir(){
            console.log("Imprimir");
            numberOfPrints++;
            console.log("Imprimido. Número de impressões realizadas até agora: " + numberOfPrints);
        }

        return {
            imprimir : imprimir
        };
    }

    return {
        instance : function(){
            if(!instance){
                instance = criar();
            } 
            return instance;
        }
    }
}