let studentWild = [
    {
        firstName: 'Geoffrey',
        lastName: 'Leglise',
        promo: 'DevWeb',
        birthDate: '03/03/1995',
        github:'https://github.com/gleglise',
        linkedin:'https://fr.linkedin.com/in/geoffrey-leglise',
        hobbies:'Jeux Videos, Musique, Tech',
        proObjective:'Développeur Web.',
        quote:'',
        image: 'https://placebear.com/200/300',
    },
    {
        firstName: 'Julien',
        lastName: 'Cartron',
        promo: 'DevWeb',
        birthDate: '12/09/1994',
        github:'https://github.com/Wakoz',
        linkedin:'https://www.linkedin.com/in/julien-cartron-747559330/',
        hobbies:'Jeux Videos,Musique',
        proObjective:'Obtenir une alternance a la suite de mon titre',
        quote:"",
        image: 'https://placebear.com/200/300',
    },
    {
        firstName: 'Sarah',
        lastName: 'Smandack',
        promo: 'DevWeb',
        birthDate: '08/01/1997',
        github:'https://github.com/sarah-sdk',
        linkedin:'https://fr.linkedin.com/in/sarah-smandack-161419167',
        hobbies:'Jeux videos, manger',
        proObjective:'Travailler de là où je veux',
        quote:'"C\est l\hopital qui se fiche du beurre de karité."',
        image: 'https://placebear.com/200/300',
    },
    {
        firstName: 'Marwane',
        lastName: 'Ben Khalifa',
        promo: 'DevWeb',
        birthDate: '25/03/1997',
        github:'',
        linkedin:'',
        hobbies:'',
        proObjective:'',
        quote:'',
        image: 'https://placebear.com/200/300',
    },
    {
        firstName: 'Sybill',
        lastName: 'Gribonval',
        promo: 'TSSR',
        birthDate: '08/01/1992',
        github:'https://github.com/Mirhazka',
        linkedin:'https://www.linkedin.com/in/sybill-gribonval-0ab964165/',
        hobbies:'Jeux vidéo & Manga',
        proObjective:'',
        quote:'',
        image: 'https://placebear.com/g/200/300',
    },
]
   //Recto card
function creatCardRecto(student){
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
    creatCardRecto(studentWild);
});
