export function waitForElement(selector: string): Promise<Element> {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutations, observer) => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
