import React from "react";
import StaffItem from "../PageComponents/StaffItem";
import FilterDraw from "../PageComponents/FilterDraw";
import VetStaffImage from "../Assets/vetstaff.jpg";

export default function StaffList() {
  return (
    <div>
      <h1>StaffList works</h1>
      <StaffItem
        position={"Veterinarian"}
        employType={""}
        businessName={"BVSc. 2015"}
        businessLogo={VetStaffImage}
        location={"Dr Cindy Ranger"}
        industryType={"Mixed Animal"}
        pay={""}
        badgeCodeArray={[
          "qldRegister",
          "waRegister",
          "avaMember",
          "avaSmallAnimal"
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
