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
    }
]
function creatCard(student){
    const trombinoscope = document.querySelector(".trombinoscope");
    //elem carte
    const article = document.createElement("article");
    trombinoscope.appendChild(article);
     //Img
    const img = document.createElement("img");
    img.src = student.image;
    console.log(student.image);
    img.alt = `Photo de ${student.firstName} ${student.lastName}`;
    article.appendChild(img);

    //nom
    const studentName = document.createElement("h2");
    studentName.classList.add("name");
    studentName.textContent = `${student.firstName} ${student.lastName}`;
    article.appendChild(studentName);

    //Linkedin-Github
    const linkedinRef = document.createElement("a");
    linkedinRef.classList.add("link");
    linkedinRef.href = "https://www.linkedin.com/in/tonprofil/";
    linkedinRef.textContent = "Mon LinkedIn";
    linkedinRef.target = "_blank";

    const GithubRef = document.createElement("a");
    GithubRef.classList.add("link");
    GithubRef.href = "https://www.github.com";
    GithubRef.textContent = "Mon Github";
    GithubRef.target = "_blank";
};
studentWild.forEach((studentWild) => {
    creatCard(studentWild);
});
