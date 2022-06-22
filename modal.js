const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));


// pop-up menu
const projContainer = document.querySelector('.proj-container');


console.log(projContainer);

const proj = [

  {

    projectTitle: "Multi-Post Stories",

    projectSubtitle: "Gain+Glory",

    skills: ["Ruby on rails", "CSS", "JavaScript", "HTML"]


  },

  {
    projectTitle: "Multi-Post Stories",

    projectSubtitle: "Gain+Glory",

    skills: ["Ruby on rails", "CSS", "JavaScript", "HTML"]
  },


  {
    projectTitle: "Multi-Post Stories",

    projectSubtitle: "Gain+Glory",

    skills: ["Ruby on rails", "CSS", "JavaScript", "HTML"]
  },


  {
    projectTitle: "Multi-Post Stories",

    projectSubtitle: "Gain+Glory",

    skills: ["Ruby on rails", "CSS", "JavaScript", "HTML"]

  },


  {
    projectTitle: "Multi-Post Stories",

    projectSubtitle: "Gain+Glory",

    skills: ["Ruby on rails", "CSS", "JavaScript", "HTML"]

  },


  {
    
    projectTitle: "Multi-Post Stories",

    projectSubtitle: "Gain+Glory",

    skills: ["Ruby on rails", "CSS", "JavaScript", "HTML"]

  },
];

//Adding projects section

  function showProj()
{
  let projCard = '';
  for (let projIndex = 0; projIndex < proj.length; projIndex++){

    const worksection = `
  
    <div class="Projects">
                <div class="empty-div"></div>
                <div class="Proj-text1">
                    <h3>${proj[projIndex].projectTitle}</h3>
                    <h3>${proj[projIndex].projectSubtitle}</h3>
                    <ul class="pro-tech">
                        <li>${proj[projIndex].skills[0]}</li>
                        <li>${proj[projIndex].skills[1]}</li>
                        <li>${proj[projIndex].skills[2]}</li>
                        <li>${proj[projIndex].skills[3]}</li>
                    </ul>
                    <br>
                    <a class="pro-btn" href="#works-section">See Project</a>
                </div>
            </div>

  
  
  
  `;

      projCard = projCard.concat(worksection);
  }
  
  return projCard;
}

let projHTML = showProj();

const worksSection = document.getElementById('works-section');
worksSection.insertAdjacentHTML('beforeend', projHTML);
