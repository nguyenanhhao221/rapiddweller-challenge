import React from "react";
import EngLogo from "../../public/assets/images/en.svg";
import Image from "next/image";

export const LanguageButton = () => {
  return (
    <div className="translate text-white">
      <button
        title="translate"
        type="button"
        className="flex items-center opacity-100"
      >
        <Image
          src={EngLogo}
          alt="english translate"
          className="h-6 w-6 rounded-full"
        />
        {"▼"}
      </button>
    </div>
  );
};
