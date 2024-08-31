async function loadComponent(path: string, id: string): Promise<void> {
   try {
      const response = await fetch(path);
      if (!response.ok) return;

      const element = document.querySelector(id);
      if (!element) return;

      const htmlContent = await response.text();

      element.innerHTML += htmlContent;
   } catch (error) {
      console.error("Error en loadComponent:", error);
   }
}
