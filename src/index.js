import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";
import es from "./translations/es/es.json";
import en from "./translations/en/en.json";
import { initReactI18next } from 'react-i18next';


i18next.use(initReactI18next)
.init({
  lng: "es",
  interpolation:{
    escapeValue:false
  },
  resources:{
    en:{
      translation:en
    },
    es:{
      translation:es
    }  
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    
  </React.StrictMode>
);





