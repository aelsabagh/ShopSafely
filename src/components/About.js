import React from "react";

export function About() {
  return (
    <div className="about">
    <p>
      Rory, Rob and Abram came up with the idea as part of 
      {" "}<a
          rel="noopener noreferrer"
          target="_blank"
          href="https://challenges.openideo.com/challenge/covid-19-business-pivot-challenge-ideation/ideas/shop-safely"
          >          IDEO's Business Pivot Challenge.</a> {" "} 
      We found {" "}
      <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/CarysMills"
          >Carys'</a> {" "} code on Twitter (<a           target="_blank"
          rel="noopener noreferrer"
          href="https://whento.shop/">https://whento.shop/</a>), and built on top of it to get to where we are today.
    </p>

    <p>
        Don't see your community on here?&nbsp; To make requests,{" "}
        <a href="mailto:shopsafel20y@gmail.com">send a note</a> with your
        neighbourhood name and either a postal code or the specific stores you'd
        like to see listed there.
      </p>
    
    <strong>The following was originally written by Carys.</strong> {" "}
      <p> 

      You can find
        The data viz on this site was made using Google's &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/business/answer/6263531?hl=en"
        >
          popular times data
        </a>
        &nbsp;via the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/m-wrzr/populartimes"
        >
          populartimes Python library
        </a>
        . Data for this website is scraped once per day, however Google's data
        represents average popularity over the last few months. Make sure to
        check directly with grocery stores about their hours and if they have
        special hours dedicated to seniors shopping or others at risk.
      </p>
    </div>
  );
}
