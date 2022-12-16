import React from "react";

const TeamCard = ({
  img,
  name,
  currentDesignation,
  prevDesignation,
  email,
}) => {
  const teamClass =
    "font-thin xl:text-[20px] md:text-[18px] sm:text-[13px]  text-[10px] tracking-wide  text-white";
  return (
    <div className="flex sm:flex-row flex-col sm:gap-20 gap-5 my-20 z-100 items-center justify-center w-[20rem] md:w-[50rem] text-left">
      <img
        src={
          img
            ? img
            : "https://res.cloudinary.com/dbmw0xoar/image/upload/v1671115867/ecell/MURL/blank-profile-picture-973460_960_720_s4mecc.webp"
        }
        alt={name ? name : "teamPerson"}
        className="object-cover w-60 rounded-md shadow-lg"
      />
      <div className="flex flex-col gap-3">
        <h3 className={teamClass}>
          <span className="font-bold">{name ? name : "Name"}</span>
        </h3>
        <h4 className={teamClass}>
          {currentDesignation[0] ? currentDesignation[0] : "Desigation current"}
          {", "}
          <span className="font-bold">
            {currentDesignation[1] ? currentDesignation[1] : "location"}
          </span>
        </h4>
        <h4 className={teamClass}>
          {prevDesignation[0] ? prevDesignation[0] : "Desigation prev"}
          {", "}
          <span className="font-bold">
            {prevDesignation[1] ? prevDesignation[1] : "Desigation location"}
          </span>
        </h4>
        <h4 className={teamClass}>
          <span className="font-bold">Email Id: </span>{" "}
          {email ? email : "Email id:"}
        </h4>
      </div>
    </div>
  );
};

export default TeamCard;