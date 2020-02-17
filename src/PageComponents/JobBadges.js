import React from "react";
import { Avatar, Tooltip } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
//AVA Badge Logos
import SchoolIcon from "../Assets/JobBadgeLogos/matschool.svg";
import WorldIcon from "../Assets/JobBadgeLogos/matpublic.svg";
import HouseIcon from "../Assets/JobBadgeLogos/mathouse.svg";
import CarIcon from "../Assets/JobBadgeLogos/matvehicle.svg";
import FlightIcon from "../Assets/JobBadgeLogos/matflight.svg";

export default function StaffBadges({ badgeCodeArray }) {
  return (
    <>
      <AvatarGroup>
        {badges.map(
          badge =>
            badgeCodeArray.includes(badge.badgeCode) && (
              <Tooltip title={badge.TooltipTitle}>
                <Avatar
                  src={badge.AvatarSrc}
                  alt={badge.AvatarAlt}
                  style={{
                    ...avatarStyles,
                    backgroundColor: badge.AvatarColor
                  }}>
                  {badge.AvatarLetters}
                </Avatar>
              </Tooltip>
            )
        )}
      </AvatarGroup>
    </>
  );
}

const avatarStyles = {
  width: "35px",
  height: "35px",
  // marginRight: "10px",
  fontSize: "0.8rem",
  border: "1px solid black"
};

const badges = [
  //GENERAL JOB BADGES
  {
    badgeCode: "acceptNewGraduate",
    TooltipTitle: "New Graduates Accepted",
    AvatarSrc: SchoolIcon,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "acceptOverseas",
    TooltipTitle: "Overseas Candidates Accepted",
    AvatarSrc: WorldIcon,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "provideAccomodation",
    TooltipTitle: "Accoomodation Provided or Costs Reimburse",
    AvatarSrc: HouseIcon,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "provideVehicle",
    TooltipTitle: "Vehicle Provided or Costs Reimburse",
    AvatarSrc: CarIcon,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "provideFlight",
    TooltipTitle: "Flights Provided or Costs Reimburse",
    AvatarSrc: FlightIcon,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  }
];
