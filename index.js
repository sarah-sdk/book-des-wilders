import studentWild from "./tableau.js";
console.log(studentWild);

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