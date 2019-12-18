(() => {
  const parseTemplate = (text: string): HTMLTemplateElement => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    return doc.head.querySelector("template");
  };

  const loadToggles = async (): Promise<void> => {
    const root = window.location.pathname.split("demos").shift();
    const response = await window.fetch(`${root}demos/toggles.template`);
    const text = await response.text();
    const template = parseTemplate(text);
    const nav = document.querySelector("nav") || document.querySelector("calcite-demo-nav");
    nav && nav.after(template.content);
    attachHandlers();
  };

  const attachHandlers = (): void => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".toggles calcite-button");
    buttons.forEach((button) =>
      button.addEventListener("click", (event) => toggleProperty((event.target as HTMLElement).dataset.jsId))
    );
  };

  let components: HTMLElement[] = null;
  const excludedComponents = ["calcite-demo-nav", "calcite-button"];
  const toggleProperty = (property: string): void => {
    components = components || Array.from(document.body.querySelectorAll(".hydrated"));

    components.forEach((component) => {
      if (!excludedComponents.includes(component.tagName.toLowerCase())) {
        component.toggleAttribute(property);
      }
    });
  };

  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", loadToggles);
  } else {
    // `DOMContentLoaded` has already fired
    loadToggles();
  }
})();