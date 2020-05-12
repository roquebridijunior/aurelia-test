import { PLATFORM } from "aurelia-framework";

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");

export class App {
  configureRouter(config, router) {
    config.title = "Contacts";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: "",
        moduleId: PLATFORM.moduleName("modules/contact-list/contact-list"),
        title: "contact-list"
      },
      {
        route: "contacts/:id",
        moduleId: PLATFORM.moduleName("modules/contact/contact"),
        name: "contacts"
      },
      {
        route: "login",
        moduleId: PLATFORM.moduleName("modules/login/login"),
        name: "login"
      }
    ]);

    this.router = router;
  }
}
