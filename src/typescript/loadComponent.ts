function load(url: string, id: string): void {
   console.log("asd");
   return;
   /* const div = document.getElementById(id);

   if (div) {
      fetch(url)
         .then((response) => {
            if (!response.ok) {
               throw new Error(
                  `Error al cargar el archivo: ${response.statusText}`
               );
            }
            return response.text();
         })
         .then((data) => {
            div.innerHTML += data;
         })
         .catch((error) => console.error("Error:", error));
   } else {
      console.error(`El div con id "${id}" no fue asd.`);
   } */
}
