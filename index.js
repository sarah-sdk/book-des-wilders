import studentWild from "./tableau.js";
console.log(studentWild);


function createCard(student) {
    const trombinoscope = document.querySelector(".trombinoscope");

    // Carte conteneur avec la classe 'card'
    const article = document.createElement("article");
    article.classList.add("card");
    trombinoscope.appendChild(article);

    // Recto de la carte (utilisation de figure pour l'image et figcaption pour le texte)
    const cardFront = document.createElement("figure");
    cardFront.classList.add("card-front");
    article.appendChild(cardFront);

    // Verso de la carte (footer pour les détails)
    const cardBack = document.createElement("footer");
    cardBack.classList.add("card-back");
    article.appendChild(cardBack);

    // Image au recto (dans figure)
    const img = document.createElement("img");
    img.classList.add("studentPicture");
    img.src = student.image;
    img.alt = `Photo de ${student.firstName} ${student.lastName}`;
    cardFront.appendChild(img);

    // Nom de l'étudiant dans une légende (figcaption)
    const studentName = document.createElement("figcaption");
    studentName.classList.add("name");
    studentName.textContent = `${student.firstName} ${student.lastName}`;
    cardFront.appendChild(studentName);

    // Lien LinkedIn au recto
    const linkedinRef = document.createElement("a");
    linkedinRef.classList.add("linkedin");
    linkedinRef.href = student.linkedin || "#";  // Lien vers LinkedIn spécifique ou par défaut
    linkedinRef.target = "_blank";
    linkedinRef.ariaLabel = "Lien vers Linkedin";
    cardFront.appendChild(linkedinRef);

    // Lien GitHub au recto
    const githubRef = document.createElement("a");
    githubRef.classList.add("github");
    githubRef.href = student.github || "#";  // Lien vers GitHub spécifique ou par défaut
    githubRef.target = "_blank";
    githubRef.ariaLabel= "Lien vers Github";
    cardFront.appendChild(githubRef);

    // Date de naissance (utilisation de time pour la date)
    if (student.birthDate) {
        const studentBirthDate = document.createElement("h3");
        studentBirthDate.textContent = "Date de naissance :";
        cardBack.appendChild(studentBirthDate);

        const studentAge = document.createElement("time");
        studentAge.textContent = `${student.birthDate}`;
        cardBack.appendChild(studentAge);
    }

    // Hobbies (liste de hobbies sous forme de paragraphes)
    if (student.hobbies) {
        const studentHobbies = document.createElement("h3");
        studentHobbies.textContent = "Hobbies :";
        cardBack.appendChild(studentHobbies);

        const hobbiesText = document.createElement("p");
        hobbiesText.textContent = `${student.hobbies}`;
        cardBack.appendChild(hobbiesText);
    }

    // Objectif professionnel
    if (student.proObjective) {
        const proObject = document.createElement("h3");
        proObject.textContent = "Objectif professionnel :";
        cardBack.appendChild(proObject);

        const proObjectText = document.createElement("p");
        proObjectText.textContent = `${student.proObjective}`;
        cardBack.appendChild(proObjectText);
    }

    // Citation ou anecdote (utilisation de blockquote pour la citation)
    if (student.quote) {
        const citaAnec = document.createElement("h3");
        citaAnec.textContent = "Anecdote/Citation :";
        cardBack.appendChild(citaAnec);

        const citaAnecText = document.createElement("blockquote");
        citaAnecText.textContent = `${student.quote}`;
        cardBack.appendChild(citaAnecText);
    }

    // Ajout d'un événement de clic pour retourner la carte
    article.addEventListener("click", () => {
        article.classList.toggle("flipped");
    });

    if (student.promo === "DevWeb"){
        article.classList.add("devWeb");
    } else if (student.promo === "Data") {
        article.classList.add("data");
    } else if (student.promo === "TSSR") {
        article.classList.add("tssr");
    }
};

studentWild.forEach((studentWild) => {
    createCard(studentWild);
});

const promoFilter = document.querySelector('#promoFilter');

promoFilter.addEventListener('change', function (){
    const selectedPromo = promoFilter.value;
    const trombi = document.querySelector('section');
    trombi.innerHTML = '';
    studentWild.forEach((student) => {
        if (selectedPromo === 'devWeb' && student.promo === 'DevWeb') {
            createCard(student);
        } else if (selectedPromo === 'data' && student.promo === 'Data') {
            createCard(student);
        } else if (selectedPromo === 'tssr' && student.promo === 'TSSR') {
            createCard(student);
        } else if (selectedPromo === 'all'){
            createCard(student);
        }
    });
});