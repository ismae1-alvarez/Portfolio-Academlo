import './style.css'


// DarkMode 
const darkModeCheckbox = document.getElementById('darkMode') as HTMLInputElement;

if (darkModeCheckbox) {
    darkModeCheckbox.onchange = () => {
        const isChecked = darkModeCheckbox.checked;

        // Aplicar estilos de modo oscuro o claro según el estado del checkbox
        document.documentElement.classList.toggle("dark", isChecked);
        document.documentElement.classList.toggle("light", !isChecked);
    };
}

//Mode Lenguages
interface Translations {
    [key: string]: {
      welcome: string;
      greeting: string;
      menu : {
        home: string;
        about : string;
        skills : string;
        contact : string;
      }
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
    document.getElementById('home')!.textContent = translations[currentLanguage].menu.home;
    document.getElementById('about')!.textContent = translations[currentLanguage].menu.about;
    document.getElementById('skills')!.textContent = translations[currentLanguage].menu.skills;
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
