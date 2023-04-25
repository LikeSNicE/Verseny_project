import React from "react";
import { Link } from "react-router-dom";
import styles from "./File.module.scss";

export default function File({ data }) {
  const fileMap = new Map([
    ["folder", "https://img.icons8.com/color/256/folder-invoices.png"],
    [
        "txt",
        "https://img.icons8.com/external-others-iconmarket/256/external-txt-file-types-others-iconmarket-3.png",
      ],
    [
      "css",
      "https://img.icons8.com/external-others-iconmarket/256/external-css-file-types-others-iconmarket-3.png",
    ],
    [
      "html",
      "https://img.icons8.com/external-flat-juicy-fish/256/external-html-coding-and-development-flat-flat-juicy-fish.png",
    ],
    ["undefined", "https://img.icons8.com/fluency/256/file.png"],
    [
      "mp4",
      "https://img.icons8.com/external-fauzidea-flat-fauzidea/256/external-mp4-file-file-extension-fauzidea-flat-fauzidea.png",
    ],
    ["mp3", "https://img.icons8.com/color/256/mp3.png"],
  ]);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={fileMap.get(data.type)}
        className={styles.iconFile}
        alt={data.type}
      />
      <h3 className={styles.fileName}>
        <Link to={data.link} className={styles.fileNameLink}>{data.name}</Link>
      </h3>
    </div>
  );
}
