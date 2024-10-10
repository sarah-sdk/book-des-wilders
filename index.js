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
function creatCard(student){
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

    if (student.promo === "DevWeb"){
        article.classList.add("devWeb");
    } else if (student.promo === "Data") {
        article.classList.add("data");
    } else if (student.promo === "TSSR") {
        article.classList.add("tssr");
    }
};
studentWild.forEach((studentWild) => {
    creatCard(studentWild);
});

const promoFilter = document.querySelector('#promoFilter');

promoFilter.addEventListener('change', function (){
    const selectedPromo = promoFilter.value;
    const trombi = document.querySelector('section');
    trombi.innerHTML = '';
    studentWild.forEach((student) => {
        if (selectedPromo === 'devWeb' && student.promo === 'DevWeb') {
            creatCard(student);
        } else if (selectedPromo === 'data' && student.promo === 'Data') {
            creatCard(student);
        } else if (selectedPromo === 'tssr' && student.promo === 'TSSR') {
            creatCard(student);
        } else if (selectedPromo === 'all'){
            creatCard(student);
        }
    });
});