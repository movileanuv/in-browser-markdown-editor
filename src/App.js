import React from "react";

export default function App() {
  return <>
    <div className={"font-sans text-base"}>In App Heading (M)</div>
    <div className={"font-sans text-sm tracking-wide"}>In App Heading (S)</div>
    <div className={"font-sans text-xs"}>In App Body (S)</div>
    <h1>Preview H1</h1>
    <h2>Preview H2</h2>
    <h3>Preview H3</h3>
    <h4>Preview H4</h4>
    <h5>Preview H5</h5>
    <h6>Preview H6</h6>
    <p>Preview Paragraph - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
    <p className={"font-bold"}>Preview Paragraph Bold -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
    <code>Markdown - Preview Paragraph Bold -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </code>
  </>
}
