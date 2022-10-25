//MON BACKEND POUR L'EXTRACTION DES TEXTES

export const MY_EXTRACT_PDF_API =
  "https://my-docx-pdf-extractor.herokuapp.com/extractPDF";
export const MY_EXTRACT_DOCX_API =
  "https://my-docx-pdf-extractor.herokuapp.com/extractWORD";

export const MY_EXTRACT_PDF_API_WITHOUT_LINE =
  "https://my-docx-pdf-extractor-not-line.herokuapp.com/extractPDF";
export const MY_EXTRACT_DOCX_API_WITHOUT_LINE =
  "https://my-docx-pdf-extractor-not-line.herokuapp.com/extractWORD";

// export const MY_EXTRACT_PDF_API = "http://localhost:3333/extractPDF";
// export const MY_EXTRACT_DOCX_API = "http://localhost:3333/extractWORD";

//API DE SYNTHESE

export const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtyYW1lZGF2aWRAZ21haWwuY29tIiwiZXhwIjoxNjY5MjkzNDE1fQ.pba1JbpL-mc0BCLU0mwG2RYNPZjR2SLW8ahftHbVgvU";
// export const ENDPOINT_GENSIM = "http://localhost:8000/extractive-gensim";
// export const ENDPOINT_BART_LARGE = "http://localhost:8000/abstractive-large";
// export const ENDPOINT_BART_VERY_LARGE =
//   "http://localhost:8000/abstractive-very-large";
// export const ENDPOINT_MERGE = "http://localhost:8000/extractive-merge";
// export const ENDPOINT_BARThez = "http://localhost:8000/abstractive-barthez";
// export const ENDPOINT_PEGASUS = "http://localhost:8000/abstractive-pegasus";

// Vraie endpoint ici : /abstractive-experimental-BARTkrame
// Le modèle que je vais uploader sur Hugging Face sera nommé krm/BARTkrame-abstract (DEJA FAIT!)

// export const ENDPOINT_BARTKrame =
//   "http://localhost:8000/abstractive-experimental-bartkrame";
// export const ENDPOINT_EVALUATION = "http://localhost:8000/evaluation";

export const ENDPOINT_GENSIM = "http://139.177.207.23/extractive-gensim";
export const ENDPOINT_BART_LARGE = "http://139.177.207.23/abstractive-large";
export const ENDPOINT_BART_VERY_LARGE =
  "http://139.177.207.23/abstractive-very-large";
export const ENDPOINT_MERGE = "http://139.177.207.23/extractive-merge";
export const ENDPOINT_BARThez = "http://139.177.207.23/abstractive-barthez";
export const ENDPOINT_PEGASUS = "http://139.177.207.23/abstractive-pegasus";

export const ENDPOINT_BARTKrame =
  "http://139.177.207.23/abstractive-experimental-bartkrame";
export const ENDPOINT_EVALUATION = "http://139.177.207.23/evaluation";

// Id des boutons radio (pourn ne pas se tromper en choisissant l'end-point de synthèse)

export const ID_RADIO_BTN_GENSIM = "gensim";
export const ID_RADIO_BTN_GENSIM_GROS_DOC = "extractive";
export const ID_RADIO_BTN_MERGE = "melange";
export const ID_RADIO_BTN_BART_LARGE = "bart";
export const ID_RADIO_BTN_BART_VERY_LARGE_GROS_DOC = "abstractive";
export const ID_RADIO_BTN_PEGASUS = "pegasus";
export const ID_RADIO_BTN_BARTHEZ = "barthez";
export const ID_RADIO_BTN_BARTKrame = "experimental";

export const EVALUATIONS = ["Very bad", "Bad", "Neutral", "Good", "Very good"];

// Temps en microsecondes
export const DEFAULT_TIMEOUT = 7200000;
