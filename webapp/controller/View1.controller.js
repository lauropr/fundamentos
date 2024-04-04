sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("z99.fundamentos.controller.View1", {
            onInit: function () {
            },

            aoClicarItem: function(oEvent) {

                //Resgata o objeto no modelo do item que foi clicado (context binding)
                let oEstadoSelecionado = oEvent.getParameters().listItem.getBindingContext("estados").getObject();

                //Resgata o caminho no modelo do item que foi clicado
                let sCaminho = oEvent.getParameters().listItem.getBindingContext("estados").getPath();
                let sIndice = sCaminho.split("/").pop();
            
                //resgata o Roteador e navega para a rota de detalhe do estado selecionado, passnado um objeto com a propriedade abrev 
                //resgatada anteriormente
                let oRoteador = this.getOwnerComponent().getRouter();
                oRoteador.navTo("RouteView2", {
                    abrev: sIndice
                });


                
            }

        });
    });
