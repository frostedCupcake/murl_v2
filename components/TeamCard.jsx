import React from 'react';

const TeamCard = ({
  img,
  name,
  currentDesignation,
  prevDesignation,
  email,
}) => (
  <div className="flex sm:flex-row flex-col sm:gap-20 gap-5 my-20 z-100 items-center justify-center w-[20rem] md:w-[50rem] text-left">
    <img
      src={img}
      alt={name}
      className="object-cover w-60 rounded-md shadow-lg"
    />
    <div className="flex flex-col gap-3">
      <h3 className="font-thin xl:text-[20px] md:text-[18px] sm:text-[13px]  text-[10px] tracking-wide  text-white">
        <span className="font-bold">{name}</span>
      </h3>
      <h4 className="font-thin xl:text-[20px] md:text-[18px] sm:text-[13px]  text-[10px] tracking-wide  text-white">
        {currentDesignation[0]}
        {', '}
        <span className="font-bold">{currentDesignation[1]}</span>
      </h4>
      <h4 className="font-thin xl:text-[20px] md:text-[18px] sm:text-[13px]  text-[10px] tracking-wide  text-white">
        {prevDesignation[0]}
        {', '}
        <span className="font-bold">{prevDesignation[1]}</span>
      </h4>
      <h4 className="font-thin xl:text-[20px] md:text-[18px] sm:text-[13px]  text-[10px] tracking-wide  text-white">
        <span className="font-bold">Email Id: </span> {email}
      </h4>
    </div>
  </div>
);

export default TeamCard;
