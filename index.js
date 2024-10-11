import studentWild from "./tableau.js";
console.log(studentWild);


   function createCard(student){
    const trombinoscope = document.querySelector(".trombinoscope");
    //elem carte
    const article = document.createElement("article");
    trombinoscope.appendChild(article);
     //Img
    const img = document.createElement("img");
    img.classList.add("studentPicture");
    img.src = student.image;
    console.log(student.image);
    img.alt = `Photo de ${student.firstName} ${student.lastName}`;
    article.appendChild(img);
    //nom
    const studentName = document.createElement("h2");
    studentName.classList.add("name");
    studentName.textContent = `${student.firstName} ${student.lastName}`;
    article.appendChild(studentName);
    //Linkedin
    const linkedinRef = document.createElement("a");
    linkedinRef.classList.add("linkedin");
    linkedinRef.href = "https://www.linkedin.com/in/tonprofil/";
    linkedinRef.target = "_blank";
    linkedinRef.ariaLabel = "Lien vers Linkedin";
    article.appendChild(linkedinRef);
    //Github
    const GithubRef = document.createElement("a");
    GithubRef.classList.add("github");
    GithubRef.href = "https://www.github.com";
    GithubRef.ariaLabel = "Lien vers Github";
    GithubRef.target = "_blank";
    article.appendChild(GithubRef);
    
//Date de naissance (chiffre + text)
    if(student.birthDate){
    const studentBirthDate = document.createElement("h3");
    studentBirthDate.classList.add("agetext");
    studentBirthDate.textContent ="Date de naissance :";
    article.appendChild(studentBirthDate); 

    const studentAge = document.createElement("p");
    studentAge.classList.add("age");
    studentAge.textContent =`${student.birthDate}`;
    article.appendChild(studentAge);
    }
    //Hobbies
    if(student.hobbies){
    const studentHobbies = document.createElement("h3");
    studentHobbies.classList.add("Hobbies");
    studentHobbies.textContent =`${student.hobbies}`;
    article.appendChild(studentHobbies);
    }
    //Objectif titre
    if(student.proObjective){
        const proObject = document.createElement("h3");
    proObject.classList.add("objectifpro");
    proObject.textContent ="Objectif professionnel";
    article.appendChild(proObject);
    //Objectif text
    const proObjectText = document.createElement("p");
    proObjectText.classList.add("objectifprotext");
    proObjectText.textContent = `${student.proObjective}`;
    article.appendChild(proObjectText);
    }
    //citation-anecdote
    if(student.quote){
    const citaAnec = document.createElement("h3");
    citaAnec.classList.add("citaAnecTitre");
    citaAnec.textContent = "Anecdote-Citation";
    article.appendChild(citaAnec);
    //citation-anecdote text
    const citaAnecText = document.createElement("p");
    citaAnecText.classList.add("citaanectext");
    citaAnecText.textContent =`${student.quote}`;
    article.appendChild(citaAnecText);
    }

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


/*Filtre pour la promo*/
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