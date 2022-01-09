// alert("Bienvenido a mi mundo Marvel")

window.onload = () => {
  const apiURL =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ed225665a40d7a6a19ac6ac9b8bbb2b0&hash=6cc60c6f6c49d74a50e03009d3682b00";

  fetch(apiURL)
    .then((res) => res.json())
    .then((json) => {
      //Debido a que algunas imagenes no están disponibles, filtro solo a los personajes con una imágen válida
      let withAvailableImg = json.data.results.filter(
        (item) => !item.thumbnail.path.includes("available")
      );
      let firstPag = withAvailableImg.slice(0, 8); //Por rendimiento de la web solo incluiré 8 carácteres
      // let orderedById = (a, b) => a.id - b.id
      // firstPag.sort(orderedById);
      // console.log(firstPag);

      //Me decido por un "for of" para iterar con todos los heroes
      for (const hero of firstPag) {
        console.log(hero);

        //Creamos DIV padre que contendra cada tarjeta
        let fatherDiv = document.querySelector(".card-group");
        let divContainer = document.createElement("div");
        divContainer.setAttribute("class", "col-sm-6");
        let characterDiv = document.createElement("div");
        characterDiv.setAttribute("class", "card");
        characterDiv.setAttribute("class", "card border-primary mb-3");
        characterDiv.setAttribute("class", "card text-center");
        // characterDiv.setAttribute("class", "divClass")
        fatherDiv.append(divContainer);
        divContainer.appendChild(characterDiv);

        //Incluimos el ID en formato h3
        let idSubtitle = document.createElement("h3");
        idSubtitle.setAttribute("class", "card-subtitle");
        idSubtitle.innerText = hero.id;
        characterDiv.appendChild(idSubtitle);

        //Incluimos el nombre del personaje en h1
        let h2Name = document.createElement("h1");
        h2Name.setAttribute("class", ".card-title");
        h2Name.setAttribute("class", "h2Typo");
        h2Name.innerText = hero.name;
        characterDiv.appendChild(h2Name);

        //Incluimos las imágenes de cada personaje
        let imgCharacter = document.createElement("img");
        imgCharacter.src = hero.thumbnail.path + ".jpg";
        imgCharacter.alt = hero.name;
        imgCharacter.setAttribute("class", "card-img-top");
        // imgCharacter.setAttribute("class", "item7")
        imgCharacter.classList.add("thumbnail");
        characterDiv.appendChild(imgCharacter);

        //Creamos un botón que enlace con su wiki

        let wikiBtn = document.createElement("button");
        wikiBtn.setAttribute("class", "btn btn-primary");
        wikiBtn.innerHTML = `<a href="${hero.urls[0].url}" class="btn btn-primary btn-lg btn-block">CONOCE MAS SOBRE TU PERSONAJE</a>`;
        characterDiv.appendChild(wikiBtn);
      }

      let btnId = document.querySelector('[data-function ="idOrder"]');
      btnId.addEventListener("click", () => {
        setNewOrder();
      });
      let setNewOrder = () => {
        let orderedById = (a, b) => a.id - b.id ;
        firstPag.sort(orderedById)
        let newArray = [...firstPag]
        

        for (const hero of newArray){
          console.log(hero);
  
          //Creamos DIV padre que contendra cada tarjeta
          let fatherDiv = document.querySelector(".card-group");
          let divContainer = document.createElement("div");
          divContainer.setAttribute("class", "col-sm-6");
          let characterDiv = document.createElement("div");
          characterDiv.setAttribute("class", "card");
          characterDiv.setAttribute("class", "card border-primary mb-3");
          characterDiv.setAttribute("class", "card text-center");
          // characterDiv.setAttribute("class", "divClass")
          fatherDiv.append(divContainer);
          divContainer.appendChild(characterDiv);
  
          //Incluimos el ID en formato h3
          let idSubtitle = document.createElement("h3");
          idSubtitle.setAttribute("class", "card-subtitle");
          idSubtitle.innerText = hero.id;
          characterDiv.appendChild(idSubtitle);
  
          //Incluimos el nombre del personaje en h1
          let h2Name = document.createElement("h1");
          h2Name.setAttribute("class", ".card-title");
          h2Name.setAttribute("class", "h2Typo");
          h2Name.innerText = hero.name;
          characterDiv.appendChild(h2Name);
  
          //Incluimos las imágenes de cada personaje
          let imgCharacter = document.createElement("img");
          imgCharacter.src = hero.thumbnail.path + ".jpg";
          imgCharacter.alt = hero.name;
          imgCharacter.setAttribute("class", "card-img-top");
          // imgCharacter.setAttribute("class", "item7")
          imgCharacter.classList.add("thumbnail");
          characterDiv.appendChild(imgCharacter);
  
          //Creamos un botón que enlace con su wiki
  
          let wikiBtn = document.createElement("button");
          wikiBtn.setAttribute("class", "btn btn-primary");
          wikiBtn.innerHTML = `<a href="${hero.urls[0].url}" class="btn btn-primary btn-lg btn-block">CONOCE MAS SOBRE TU PERSONAJE</a>`;
          characterDiv.appendChild(wikiBtn);
        }
    
      };
    });
};
