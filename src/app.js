export class App {
  configureRouter(config, router) {
    config.title = "Contacts";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: "",
        moduleId: "modules/contact-list/contact-list",
        title: "contact-list"
      },
      {
        route: "contacts/:id",
        moduleId: "modules/contact/contact",
        name: "contacts"
      }
    ]);

    this.router = router;
  }
}
