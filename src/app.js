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
        route: "pacotes",
        moduleId: PLATFORM.moduleName("pages/pacotes/pacotes"),
        name: "loja"
      },
      {
        route: "minhas-transacoes",
        moduleId: PLATFORM.moduleName(
          "pages/minhas-transacoes/minhas-transacoes"
        ),
        name: "transacoes"
      },
      {
        route: "transacoes",
        moduleId: PLATFORM.moduleName("pages/transacoes/transacoes"),
        name: "transacoes"
      },
      {
        route: "transacao/:id",
        moduleId: PLATFORM.moduleName("pages/transacao/transacao"),
        name: "transacao"
      },
      {
        route: "saldos",
        moduleId: PLATFORM.moduleName("pages/saldos/saldos"),
        name: "saldos"
      },
      {
        route: "pacote/:id",
        moduleId: PLATFORM.moduleName("pages/pacote/pacote"),
        name: "pacote"
      }
    ]);
  }
}
