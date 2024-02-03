import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#3A3B3C",
    backgroundColor: props.mode === "dark" ? "#3A3B3C" : "white"
  };

  return (
    <div className="container py-3 rounded" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils give you a way to analyze your text quickly and efficiently. Be it a word , charachter or paragraph.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is free charachter counter tool that provides instat charachter count & word count statistics for a given text. TextUtils reports the numbers of word and charachters.Thus it is for writing txet with word/charachter
              limits.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count charchters in facebook, blog, books, excel documents, pdf documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
