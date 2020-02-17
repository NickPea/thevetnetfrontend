import React from "react";
import JobItem from "../PageComponents/JobItem";
import FilterDraw from "../PageComponents/FilterDraw";
import greenCrossLogo from "../Assets/greencross.jfif";

export default function JobList() {
  return (
    <div>
      <h1>JobList works</h1>
      <JobItem
        position={"Veterinarian"}
        employType={"Permanent"}
        businessName={"Greencross-AEC"}
        businessLogo={greenCrossLogo}
        location={"Brisbane-Woolloongabba"}
        industryType={"Small Animal"}
        pay={"$70-80k"}
        badgeCodeArray={[
          "provideAccomodation",
          "provideVehicle",
          "provideFlight",
          "acceptNewGraduate",
          "acceptOverseas"
        ]}
        shortDescription={
          "seeking locum for christmas rush period, need responses soon, good $$$, accomodation and car provided, ideal candidate, blah blah blah blah blah blah blah  and something about stuff and more stuff about stuff etc."
        }
        datePosted={"2 Days Ago"}
      />
      <FilterDraw />
    </div>
  );
}
