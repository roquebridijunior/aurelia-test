import { PLATFORM } from "aurelia-framework";

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = "Contacts";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: "",
        moduleId: PLATFORM.moduleName("pages/painel/painel"),
        title: "painel-principal"
      },
      {
        route: "login",
        moduleId: PLATFORM.moduleName("pages/login/login"),
        name: "login"
      },
      {
        route: "esqueceu-senha",
        moduleId: PLATFORM.moduleName("pages/esqueceu-senha/esqueceu-senha"),
        name: "esqueceu-senha"
      },
      {
        route: "alistamento",
        moduleId: PLATFORM.moduleName("pages/alistamento/alistamento"),
        name: "alistamento"
      },
      {
        route: "loja",
        moduleId: PLATFORM.moduleName("pages/loja/loja"),
        name: "loja"
      },
      {
        route: "transacoes",
        moduleId: PLATFORM.moduleName("pages/transacoes/transacoes"),
        name: "transacoes"
      }
    ]);
  }
}
