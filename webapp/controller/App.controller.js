sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("z99.fundamentos.controller.App", {
        onInit: function() {


          //declara um novo modelo JSON
          let oModeloEstados = new JSONModel();

          //declara um objeto com uma propriedade do tipo array e vários objetos dentro do array sendo uma coleção          
          let oEstados = {
              valores: [
                {
                  nome: "São Paulo",
                  abrev: "SP",
                  pais: "BR"
                },
                {
                  nome: "Pará",
                  abrev: "PA",
                  pais: "BR"
                },
                {
                  nome: "Paraná",
                  abrev: "PR",
                  pais: "BR"
                },
                {
                  nome: "Rio de Janeiro",
                  abrev: "RJ",
                  pais: "BR"
                }
              ]
          };

          //configura a raíz do modelo "/" com o objeto oEstados, como sendo o conteúdo do modelo
          oModeloEstados.setProperty("/", oEstados);
          
          //associa o modelo Estados ao Component.js, pra ficar disponível para as views
          this.getOwnerComponent().setModel(oModeloEstados, "estados");


        }
      });
    }
  );
  