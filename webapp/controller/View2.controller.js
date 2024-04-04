sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("z99.fundamentos.controller.View2", {
            onInit: function () {

                //resgata o roteador
                let oRoteador = this.getOwnerComponent().getRouter();
                //resgata a rota escolhida onde vamos interceptar o evento "patternMatched"
                let oRotaEscolhida = oRoteador.getRoute("RouteView2");

                //interceptar o evento adicionando uma função nova uma vez que a URL bate com o pattern da rota escolhida
                oRotaEscolhida.attachPatternMatched(this.rotaView2, this);

                //carrega o fragmento. Como a função load é um promise, precisamos declarar o método then e uma função dentro.
                Fragment.load({
                    name: "z99.fundamentos.view.fragment.detalhe",
                    controller: this
                }).then(oFragment => {                    
                    //resgata a pagina dentro da view2.view.xml
                    let oPagina = this.getView().byId("page2");
                    //adiciona o fragmento à página
                    oPagina.addContent(oFragment);
                });                
            },

            rotaView2: function(oEvent){
                var oEstadoSelecionado;

                //resgata o estado selecionado da URL
                let abrev = oEvent.getParameters().arguments.abrev;

                //monta caminho para o element binding
                let sCaminho = '/valores/' + abrev;

                //resgata a view associada a este controller (this)
                this.getView().bindElement({
                    path: sCaminho,
                    model: "estados"
                });

                // //regata o modelo
                // let oModeloEstados = this.getOwnerComponent().getModel("estados");
                // //acessa o array de estados do modelo
                // let aEstados = oModeloEstados.getProperty("/valores");
                // //encontra o estado selecionado na URL
                // aEstados.forEach(estado => {
                //     if(estado.abrev === abrev){
                //         oEstadoSelecionado = estado;
                //     }
                // });


            }

        });
    });
