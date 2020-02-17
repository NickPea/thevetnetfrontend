import React from "react";
import { Avatar, Tooltip } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
//AVA Badge Logos
import AvaLogo from "../Assets/StaffBadgeLogos/ava.jfif";
import AvaAcupunctureLogo from "../Assets/StaffBadgeLogos/avaacupuncture.png";
import AvaBehaviourLogo from "../Assets/StaffBadgeLogos/avabehaviour.png";
import AvaBusinessLogo from "../Assets/StaffBadgeLogos/avabusiness.png";
import AvaCattleLogo from "../Assets/StaffBadgeLogos/avacattle.png";
import AvaConservationLogo from "../Assets/StaffBadgeLogos/avaconservation.png";
import AvaDentalLogo from "../Assets/StaffBadgeLogos/avadental.png";
import AvaAcademiaLogo from "../Assets/StaffBadgeLogos/avaacademia.png";
import AvaEquineLogo from "../Assets/StaffBadgeLogos/avaequine.png";
import AvaGreyhoundLogo from "../Assets/StaffBadgeLogos/avagreyhound.png";
import AvaIndustryLogo from "../Assets/StaffBadgeLogos/avaindustry.png";
import AvaIntegrativeLogo from "../Assets/StaffBadgeLogos/avaintegrative.png";
import AvaPigLogo from "../Assets/StaffBadgeLogos/avapig.png";
import AvaPoultryLogo from "../Assets/StaffBadgeLogos/avapoultry.png";
import AvaPublicHealthLogo from "../Assets/StaffBadgeLogos/avapublichealth.png";
import AvaReproductiveLogo from "../Assets/StaffBadgeLogos/avareproductive.png";
import AvaSheepLogo from "../Assets/StaffBadgeLogos/avasheep.png";
import AvaSmallAnimalLogo from "../Assets/StaffBadgeLogos/avasmallanimal.png";
import AvaStudentLogo from "../Assets/StaffBadgeLogos/avastudent.png";
import AvaUnusualLogo from "../Assets/StaffBadgeLogos/avaunusual.png";
import AvaWelfareLogo from "../Assets/StaffBadgeLogos/avawelfare.png";

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
  //VETERINARY REGISTER BADGES
  {
    badgeCode: "actRegister",
    TooltipTitle: "Australian Capital Territory Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "ACT",
    AvatarColor: "blue"
  },
  {
    badgeCode: "qldRegister",
    TooltipTitle: "Queensland Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "QLD",
    AvatarColor: "maroon"
  },
  {
    badgeCode: "nswRegister",
    TooltipTitle: "New South Whales Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "NSW",
    AvatarColor: "skyblue"
  },
  {
    badgeCode: "vicRegister",
    TooltipTitle: "Victorian Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "VIC",
    AvatarColor: "navy"
  },
  {
    badgeCode: "saRegister",
    TooltipTitle: "South Australian Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "SA",
    AvatarColor: "red"
  },
  {
    badgeCode: "waRegister",
    TooltipTitle: "Western Australian Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "WA",
    AvatarColor: "orange"
  },
  {
    badgeCode: "ntRegister",
    TooltipTitle: "Northern Territory Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "NT",
    AvatarColor: "black"
  },
  {
    badgeCode: "tasRegister",
    TooltipTitle: "Tasmanian Veterinary Board Registrant",
    AvatarSrc: "",
    AvatarAlt: "",
    AvatarLetters: "TAS",
    AvatarColor: "green"
  },
  //AVA AND SPECIAL INTEREST GROUP BADGES
  {
    badgeCode: "avaMember",
    TooltipTitle: "Australian Veterinary Association Member",
    AvatarSrc: AvaLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaAcadaemia",
    TooltipTitle:
      "Veterinarians in Education, Research and Acadaemia Group Member",
    AvatarSrc: AvaAcademiaLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaAcupuncture",
    TooltipTitle: "Australian Veterinary Acupuncture Group Member",
    AvatarSrc: AvaAcupunctureLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaBehaviour",
    TooltipTitle: "Australian Veterinary Behaviour Interest Group Member",
    AvatarSrc: AvaBehaviourLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaBusiness",
    TooltipTitle: "Veterinary Business Group Member",
    AvatarSrc: AvaBusinessLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaCattle",
    TooltipTitle: "Australian Cattle Veterinarians Group Member",
    AvatarSrc: AvaCattleLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaConservation",
    TooltipTitle: "Australian Veterinary Conservation Biology Group Member",
    AvatarSrc: AvaConservationLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaDental",
    TooltipTitle: "Australian Veterinary Dental Society Group Member",
    AvatarSrc: AvaDentalLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaEquine",
    TooltipTitle: "Equine Veterinarians Australia Group Member",
    AvatarSrc: AvaEquineLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaGreyhound",
    TooltipTitle:
      "Australian Greyhound, Working and Sporting Dogs Group Member",
    AvatarSrc: AvaGreyhoundLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaIndustry",
    TooltipTitle: "Australian Veterinarians in Industry Group Member",
    AvatarSrc: AvaIndustryLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaIntegrative",
    TooltipTitle: "Integrative Veterinarians Australia Group Member",
    AvatarSrc: AvaIntegrativeLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaPig",
    TooltipTitle: "Australian Pig Veterinarians Group Member",
    AvatarSrc: AvaPigLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaPoultry",
    TooltipTitle: "Commercial Poultry Veterinarians Group Member",
    AvatarSrc: AvaPoultryLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaPublicHealth",
    TooltipTitle: "Australian Veterinarians in Public Health Group Member",
    AvatarSrc: AvaPublicHealthLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaReproductive",
    TooltipTitle: "Australian Reproductive Veterinarians Group Member",
    AvatarSrc: AvaReproductiveLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaSheep",
    TooltipTitle: "Sheep, Camelid, and Goat Veterinarians Group Member",
    AvatarSrc: AvaSheepLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaSmallAnimal",
    TooltipTitle: "Australian Small Animal Veterinarians Group Member",
    AvatarSrc: AvaSmallAnimalLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaStudent",
    TooltipTitle: "Australian Veterinary Student Group Member",
    AvatarSrc: AvaStudentLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaUnusual",
    TooltipTitle: "Unusual Pet and Avian Veterinarians Group Member",
    AvatarSrc: AvaUnusualLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  },
  {
    badgeCode: "avaWelfare",
    TooltipTitle:
      "Australian Veterinarians for Animal Welfare and Ethics Group Member",
    AvatarSrc: AvaWelfareLogo,
    AvatarAlt: "",
    AvatarLetters: "",
    AvatarColor: "white"
  }
];
