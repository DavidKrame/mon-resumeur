import React from "react";
import { useState, useContext, useEffect } from "react";
import OutputTextAreaContext from "../context/OutputTextAreaContext.js";
import SelectedFileNameContext from "../context/SelectedFileContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faArrowDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import jsPDF from "jspdf";
import image_logo from "../assets/Logo.PNG";

import "../othersStyles/footerOutput.css";

function downloadSummary(outputSummary, selectedFileName) {
  let linedOutput = outputSummary.replace(/(.{90})/g, "$1\n");
  let vectorOfLines = linedOutput.split("\n");
  const longueur = vectorOfLines.length;
  let numberOfpages = Math.ceil(longueur / 50);

  var contents = [];

  for (let i = 0; i < numberOfpages; i++) {
    contents[i] = vectorOfLines.slice(i * 50, (i + 1) * 50).join("\n");
  }
  var doc = new jsPDF("portrait", "px", "a4");
  for (let i = 0; i < numberOfpages; i++) {
    if (i < numberOfpages - 1) {
      if (i === 0) {
        doc.addImage(image_logo, "PNG", 30, 10, 50, 37);
        doc.setFontSize(15);
        doc.setFont("Helvetica", "bold");
        doc.text(100, 20, "Résumé obtenu par MonRésumeur pour le document :");
        doc.setFontSize(13);
        doc.text(120, 40, `${selectedFileName}`);
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(12);
        doc.text(30, 60, contents[i]);
        doc.addPage();
      } else {
        doc.text(30, 60, contents[i]);
        doc.addPage();
      }
    } else {
      if (numberOfpages === 1) {
        doc.addImage(image_logo, "PNG", 30, 10, 50, 37);
        doc.setFontSize(15);
        doc.setFont("Helvetica", "bold");
        doc.text(100, 20, "Résumé obtenu par MonRésumeur pour le document :");
        doc.setFontSize(13);
        doc.text(120, 40, `${selectedFileName}`);
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(12);
        doc.text(30, 60, contents[i]);
      } else {
        doc.text(30, 60, contents[i]);
      }
    }
  }
  doc.save(
    `RESUME_${selectedFileName.substring(0, selectedFileName.length - 4)}.pdf`
  );
}

export default function FooterInput() {
  const { outputSummary, setOutputSummary } = useContext(OutputTextAreaContext);
  const { selectedFileName } = useContext(SelectedFileNameContext);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setOutputSummary(outputSummary);
    setCopied(false);
  }, [outputSummary, setOutputSummary]);

  return (
    <div className="footerOutputArea">
      <div className="containerCopyOutputBtn">
        <CopyToClipboard
          text={outputSummary}
          onCopy={() => {
            setCopied(true);
          }}
        >
          <button
            className="copyOutputBtn"
            onCopy={() => {
              setCopied(true);
            }}
          >
            <div className="copyOutputBtnInternal">
              <strong>{copied ? "Copié !" : "Copier"}</strong>
              <span>
                {copied ? (
                  <FontAwesomeIcon icon={faCheck} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faCopy} size="lg" />
                )}
              </span>
            </div>
          </button>
        </CopyToClipboard>
      </div>
      <div className="ContainerDownloadOutputAreaBtn">
        <button
          className="downloadOutputAreaBtn"
          onClick={() => downloadSummary(outputSummary, selectedFileName)}
        >
          <div className="downloadOutputAreaBtnInternal">
            <strong>Télécharger</strong>
            <span>
              <FontAwesomeIcon icon={faArrowDown} size="lg" />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
