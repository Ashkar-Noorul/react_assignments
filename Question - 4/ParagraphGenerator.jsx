import React, { useState } from "react";

const sampleWords = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

function generateParagraph(wordCount) {
  let paragraph = "";
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * sampleWords.length);
    paragraph += sampleWords[randomIndex] + " ";
  }
  return paragraph.trim() + ".";
}
const ParagraphGenerator = () => {
  const [wordCount, setWordCount] = useState(50);
  const [paragraph, setParagraph] = useState("");

  const handleGenerate = () => {
    setParagraph(generateParagraph(wordCount));
  };
  return (
    <div>
      <h1>Paragraph Generator</h1>
      <label>
        Number of words:
        <input
          type="number"
          value={wordCount}
          onChange={(e) => setWordCount(e.target.value)}
        />
      </label>
      <button onClick={handleGenerate}>Generate</button>
      {paragraph && (
        <div>
          <h2>Generated Paragraph</h2>
          <p>{paragraph}</p>
        </div>
      )}
    </div>
  );
};

export default ParagraphGenerator;
