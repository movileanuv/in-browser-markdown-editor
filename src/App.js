import React from "react";

export default function App() {
  return <>
    <div className={"font-sans text-[15px] leading-[18px]"}>In App Heading (M)</div>
    <div className={"font-sans text-[14px] leading-[16px] tracking-[2px]"}>In App Heading (S)</div>
    <div className={"font-sans text-[13px] leading-[15px]"}>In App Body (S)</div>
    <h1 className={"font-serif font-bold text-[32px] leading-[42px]"}>Preview H1</h1>
    <h2 className={"font-serif font-light text-[28px] leading-[37px]"}>Preview H2</h2>
    <h3 className={"font-serif font-bold text-[24px] leading-[32px]"}>Preview H3</h3>
    <h4 className={"font-serif font-bold text-[20px] leading-[26px]"}>Preview H4</h4>
    <h5 className={"font-serif font-bold text-[16px] leading-[21px]"}>Preview H5</h5>
    <h6 className={"font-serif font-bold text-[14px] leading-[18px] text-burntSienna"}>Preview H6</h6>
    <p className={"font-serif text-[14px] leading-[24px]"}>Preview Paragraph - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
    <p className={"font-serif font-bold text-[14px] leading-[24px]"}>Preview Paragraph Bold -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
    <p className={"font-mono text-[14px] leading-[24px]"}>Markdown - Preview Paragraph Bold -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
  </>
}
