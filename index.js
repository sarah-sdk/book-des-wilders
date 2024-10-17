import studentWild from "./tableau.js";
import createTag from "./src/createTag.js";
import createModal from "./createModal.js";

const trombinoscope = document.querySelector(".trombinoscope");
const bg = document.querySelector(".bg");

function createCard(student, parent) {
    const article = createTag("article", "card", null);

    const figure = createTag("figure", "card-front", null);
    article.appendChild(figure);

    // Verso de la carte (footer pour les détails)
    const footer = createTag("footer", "card-back", null);
    article.appendChild(footer);

    // Image au recto (dans figure)
    const img = document.createElement("img");
    img.classList.add("studentPicture");
    img.src = student.image;
    img.alt = `Photo de ${student.firstName} ${student.lastName}`;
    figure.appendChild(img);

    // Nom de l'étudiant dans une légende (figcaption)
    const studentName = createTag("figcaption", "name", `${student.firstName} ${student.lastName}`);
    figure.appendChild(studentName);

    // Lien LinkedIn
    if(student.linkedin){
    const linkedinRef = document.createElement("a");
    linkedinRef.classList.add("linkedin");
    linkedinRef.href = student.linkedin || "#";  // Lien vers LinkedIn spécifique ou par défaut
    linkedinRef.target = "_blank";
    linkedinRef.ariaLabel = "Lien vers Linkedin";
    figure.appendChild(linkedinRef);
    //icone Linkedin
    const linkedinIcon = document.createElement("img");
    linkedinIcon.src = "images/linkedin.svg";
    linkedinIcon.alt = `Lien vers Linkedin de ${student.firstName} ${student.lastName}`;
    linkedinRef.appendChild(linkedinIcon);
    figure.appendChild(linkedinRef)

    //Lien GitHub 
    if (student.github){
    const githubRef = document.createElement("a");
    githubRef.classList.add("github");
    githubRef.href = student.github || "#";  // Lien vers GitHub spécifique ou par défaut
    githubRef.target = "_blank";
    figure.appendChild(githubRef);
    // Image Github
    const githubIcon = document.createElement("img");
    githubIcon.src = "images/github.svg"; // Chemin vers l'image SVG/PNG de GitHub
    githubIcon.alt = `Lien vers GitHub de ${student.firstName} ${student.lastName}`;
    githubRef.appendChild(githubIcon);
    figure.appendChild(githubRef);

    // Date de naissance (utilisation de time pour la date)
    if (student.birthDate) {
        const birthDate = createTag("h3", null, "Date de naissance :");
        footer.appendChild(birthDate);

        const age = createTag("time", null, `${student.birthDate}`);
        footer.appendChild(age);
    }

    // Hobbies (liste de hobbies sous forme de paragraphes)
    if (student.hobbies) {
        const title = createTag("h3", null, "Hobbies :");
        footer.appendChild(title);

        const hobbies = createTag("p", null, `${student.hobbies}`);
        footer.appendChild(hobbies);
    }

    // Objectif professionnel
    if (student.proObjective) {
        const title = createTag("h3", null, "Objectif professionnel :");
        footer.appendChild(title);

        const objectives = createTag("p", null, `${student.proObjective}`);
        footer.appendChild(objectives);
    }

    // Citation ou anecdote (utilisation de blockquote pour la citation)
    if (student.quote) {
        const title = createTag("h3", null, "Anecdote/Citation :");
        footer.appendChild(title);

        const quote = createTag("blockquote", null, `${student.quote}`);
        footer.appendChild(quote);
    }
    if (student.promo === "DevWeb") {
        article.classList.add("devWeb");
    } else if (student.promo === "Data") {
        article.classList.add("data");
    } else {
        article.classList.add("tssr");
    }

    //rajoute toute la carte à mon trombinoscope
    parent.appendChild(article);

    return article;
}

studentWild.forEach((studentWild) => {
    const element = createCard(studentWild, trombinoscope);

    element.addEventListener("click", () => {

        if (window.innerWidth < 1024) {
            element.classList.toggle("flipped");
        } else {
            const modal = createModal(studentWild, trombinoscope);

            modal.show();

            bg.classList.add("visibleGrid");

            bg.addEventListener("click", () => {
                modal.remove();
                bg.classList.remove("visibleGrid");
            });
            modal.addEventListener("click", () =>{
                modal.classList.toggle('flipped');
                console.log("toto");
                  
              });
            
        }
    })
});

/*Filtre pour la promo*/
const promoFilter = document.querySelector('.promoFilter');

promoFilter.addEventListener('change', function () {
    const selectedPromo = document.querySelector('input[name="promo"]:checked');

    //const trombi = document.querySelector('section');
    trombinoscope.innerHTML = ''; // supprimer les cartes du trombi
    studentWild.forEach((student) => {
        if (selectedPromo.id === 'devWeb' && student.promo === 'DevWeb') {
            createCard(student, trombinoscope);
        } else if (selectedPromo.id === 'data' && student.promo === 'Data') {
            createCard(student, trombinoscope);
        } else if (selectedPromo.id === 'tssr' && student.promo === 'TSSR') {
            createCard(student, trombinoscope);
        } else if (selectedPromo.id === 'all') {
            createCard(student, trombinoscope);
        }
    });

});
}}
