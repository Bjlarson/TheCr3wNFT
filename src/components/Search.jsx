import React from "react";

export default function SearchHeader({SearchTitle, Subtitle, SearchPH}) {
    return (
<section className="SearchHeaderSection">
<div>
    <h2 className = "SearchHeader">{SearchTitle}</h2>
    <h4 className = "SearchSubHeader">{Subtitle}</h4>
</div>
<div>
    <input className="Search"  type="text" id="SearchPhrase"  placeholder={SearchPH}/>
    <button className = "SearchButton">Search</button>
</div>
</section>
  );
}