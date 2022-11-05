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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRhdmlkaGlsYmVydDY2NkBnbWFpbC5jb20iLCJleHAiOjE2NjkzMTcyMjR9.7yddu1der_gxcPVQPXlr7aa7I4T6jXlcLy_INbWvvXA";
// export const ENDPOINT_GENSIM = "http://localhost:5000/extractive-gensim";
// export const ENDPOINT_BART_LARGE = "http://localhost:5000/abstractive-large";
// export const ENDPOINT_BART_VERY_LARGE =
//   "http://localhost:5000/abstractive-very-large";
// export const ENDPOINT_MERGE = "http://localhost:5000/extractive-merge";
// export const ENDPOINT_BARThez = "http://localhost:5000/abstractive-barthez";
// export const ENDPOINT_PEGASUS = "http://localhost:5000/abstractive-pegasus";
// export const ENDPOINT_BARTKrame =
//   "http://localhost:5000/abstractive-experimental-bartkrame";
// export const ENDPOINT_EVALUATION = "http://localhost:5000/evaluation";

// LES BARTkrame, BARThez,... ne marcheront pas à cause du PORT.

export const ENDPOINT_GENSIM = "http://96.126.112.158/extractive-gensim";
export const ENDPOINT_BART_LARGE = "http://96.126.112.158/abstractive-large";
export const ENDPOINT_BART_VERY_LARGE =
  "http://96.126.112.158/abstractive-very-large";
export const ENDPOINT_MERGE = "http://96.126.112.158/extractive-merge";
export const ENDPOINT_BARThez =
  "http://96.126.112.158:5000/abstractive-barthez";
export const ENDPOINT_PEGASUS =
  "http://96.126.112.158:5000/abstractive-pegasus";

export const ENDPOINT_BARTKrame =
  "http://96.126.112.158:5000/abstractive-experimental-bartkrame";
export const ENDPOINT_EVALUATION = "http://96.126.112.158/evaluation";

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
export const DEFAULT_TIMEOUT = 10000000;
