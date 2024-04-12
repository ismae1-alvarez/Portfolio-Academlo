// import { EmailJSResponseStatus } from '@emailjs/browser';
// import * as emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

import './style.css'


// DarkMode 
const darkModeCheckbox = document.getElementById('darkMode') as HTMLInputElement;
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme(isDark: boolean) {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
}

if (darkModeCheckbox) {
    darkModeCheckbox.onchange = () => {
        const isChecked = darkModeCheckbox.checked;
      

        if (isChecked) {
            toggleTheme(true); // Aplicar tema oscuro
        } else {
            toggleTheme(false); // Aplicar tema claro
        }
    };
}

darkQuery.addEventListener('change', (e) => {
    toggleTheme(e.matches); 
});

toggleTheme(darkQuery.matches);



// Menu
const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');
let menuOpen: boolean = false;

if (menuButton && menuList) {
  menuButton.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      menuList.style.display = 'flex';
      return;
    }
    menuList.style.display = 'none';
  });
}


//Mode Lenguages
interface Translations {
    [key: string]: {
      welcome: string;
      greeting: string;
      textAnimation : string;
      greet : string;
      moreGreet: string;
      smallDescription : string;
      firstDowlnload : string;
      aboutTitle : string;
      aboutDescription : string;
      secondDowlnload :string;
      titleSkills :string;
      titleContact : string;
      descriptionContact : string;
      inputName : string;
      inputEmail : string;
      inputMessage :string;
      menu : {
        home: string;
        about : string;
        skills : string;
        contact : string;
      },
    };
  }
  
  let translations: Translations = {};
  
  function loadTranslations() {
    fetch('text.json')
      .then(response => response.json())
      .then((data: Translations) => {
        translations = data;
        updateTexts();
      });
  }
  
  function updateTexts() {


    document.getElementById('greet')!.textContent = translations[currentLanguage].greet;
    document.getElementById('moreGreet')!.textContent = translations[currentLanguage].moreGreet;
    document.getElementById('smallDescription')!.textContent = translations[currentLanguage].smallDescription;
    document.getElementById('firstDowlnload')!.textContent = translations[currentLanguage].firstDowlnload;
    document.getElementById('aboutTitle')!.textContent = translations[currentLanguage].aboutTitle;
    document.getElementById('aboutDescription')!.textContent = translations[currentLanguage].aboutDescription;
    document.getElementById('secondDowlnload')!.textContent = translations[currentLanguage].secondDowlnload;
    document.getElementById('titleSkills')!.textContent = translations[currentLanguage].titleSkills;
    document.getElementById('titleContact')!.textContent = translations[currentLanguage].titleContact;
    document.getElementById('descriptionContact')!.textContent = translations[currentLanguage].descriptionContact;
    document.getElementById('inputName')!.textContent = translations[currentLanguage].inputName;
    document.getElementById('inputEmail')!.textContent = translations[currentLanguage].inputEmail;
    document.getElementById('inputMessage')!.textContent = translations[currentLanguage].inputMessage;









    // Menu
    document.getElementById('home')!.textContent = translations[currentLanguage].menu.home;
    document.getElementById('skills')!.textContent = translations[currentLanguage].menu.skills;
    document.getElementById('about')!.textContent = translations[currentLanguage].menu.about;
    document.getElementById('contact')!.textContent = translations[currentLanguage].menu.contact;
    
  }
  
  let currentLanguage: string = 'es'; 
  
  function changeLanguage(language: string) {
    currentLanguage = language;
    updateTexts();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadTranslations();
  
    const languageCheckbox = document.getElementById('language-checkbox') as HTMLInputElement;

    languageCheckbox.addEventListener('change', () => {
      const language = languageCheckbox.checked ? 'en' : 'es';
      changeLanguage(language);
    });
  });
  



//   Animation Text 
 const text: string = 'Web Develop Full-Stack';


let index: number = 0;
let maxIterations: number = 10;

const animationText: HTMLElement | any = document.getElementById('write-text');

function writeText() {
    if (animationText && index < text.length && maxIterations > 0) {
        animationText.textContent += text.charAt(index);
        index++;
        setTimeout(writeText, 100);
    } else if (maxIterations > 0) {
        maxIterations--;
        deleteText();
    }
}

function deleteText() {
    if (animationText && index >= 0 && maxIterations > 0) {
        animationText.textContent = animationText.textContent?.slice(0, index - 1);
        index--;
        setTimeout(deleteText, 100);
    } else if (maxIterations > 0) {
        maxIterations--;
        index = 0;
        writeText();
    }
}

writeText();


// Scroll Animation Menu and Section
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");
window.onscroll = ()=>{
  section.forEach((i)=>{
    let top = window.scrollY;
    let offset = i.offsetTop;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if(top >= offset && top < offset + height){
      menu.forEach((link)=>{
        link.classList.remove("activete");
        
        document.querySelector("header nav a[href*=" + id + "]")?.classList.add("activete")

        console.log(id)

      })  
    }
  })
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();


// Background Balls Animation
const colors: string[] = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const numBalls: number = 50;

let balls: HTMLElement[] = [];

function initializeBalls() {
  const parent = document.getElementById("balls");

  if (!parent) {
    console.error("No se encontró el elemento con id 'header'");
    return;
  }

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * parent.offsetWidth)}px`;
    ball.style.top = `${Math.floor(Math.random() * parent.offsetHeight)}px`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
  }

  // Keyframes
  balls.forEach((el, i) => {
    const toX = Math.random() * (i % 2 === 0 ? -110 : 110);
    const toY = Math.random() * 120;

    el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${toX}px, ${toY}px)` },
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  });
}

initializeBalls();



// Send Menu
emailjs.init('quNJDfEL-gvmDMonN');


function handleSubmit(event: Event) {
  event.preventDefault(); 

  // const form = document.getElementById('form') as HTMLFormElement;

  const inputName = document.getElementById('name') as HTMLInputElement | null;
  const inputEmail = document.getElementById('email') as HTMLInputElement | null;
  const inputMessage = document.getElementById('email') as HTMLInputElement | null;


  const nombre = inputName?.value
  const correo = inputEmail?.value
  const mensaje = inputMessage?.value


      const params :{
        name : any,
        email :  any,
        message : any
      } = {
        name: nombre,
        email: correo,
        message: mensaje
      };


  emailjs.send('service_hywsrg1', 'template_a7oah5a', params)
    .then(function() {
      console.log("se envio")
    
    }, function(error) {
      console.error('Error al enviar el correo:', error);
      alert('Ocurrió un error al enviar el correo.');
    });
}


const contactForm = document.getElementById('form');
if (contactForm) {
  contactForm.addEventListener('submit', handleSubmit);
}







// function getFormData(): { name: string; email: string; message: string } {
//   const name = document.getElementById('name')?.value as string;
//   const email = document.getElementById('email')?.value as string;
//   const message = document.getElementById('message')?.value as string;

//   return { name, email, message };
// }



// Send Emails 
// let nombre : string = (document.getElementById("name") as  HTMLInputElement).value;
// let correo : string = (document.getElementById("email") as  HTMLInputElement).value;
// let mensaje : string = (document.getElementById("message") as  HTMLInputElement).value;

// function sendEmail() {
//   let parms : {
//     name : string,
//     email : string,
//     messages : string
//   }= {
//     name : nombre,
//     email : correo,
//     messages : mensaje
//   }
  

//   emailjs.send("service_hywsrg1", "template_a7oah5a", parms)
// }


// Current Year
const currentYearElement = document.getElementById('currentYear')!;

function getCurrentYear() {
  return new Date().getFullYear().toString();
}

function updateYear() {
  currentYearElement.textContent = getCurrentYear();
}

window.addEventListener('load', updateYear);





