import Image from "next/image";
import React from "react";
import BeneratorLogo from "../../../public/assets/images/product_landing_page/ben_icon_white.svg";
import GenerateImg from "../../../public/assets/images/product_landing_page/generate.svg";
import MaskIMG from "../../../public/assets/images/product_landing_page/mask.svg";
import PsudoImg from "../../../public/assets/images/product_landing_page/pseudo.svg";

const HeroItems = [
  { img: GenerateImg, text: "Generate & Migrate..." },
  { img: MaskIMG, text: "ANONYMIZE..." },
  { img: PsudoImg, text: "PSEUDONYMIZE..." },
];

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-8 md:p-12 lg:p-[70px]">
      <div className="mx-auto inline-flex max-w-[690px] flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-6">
        <Image
          priority
          alt="Benerator"
          src={BeneratorLogo}
          className="max-w-[13.75rem] rounded-2xl bg-primary object-fill object-center p-8 md:h-auto md:w-full"
        />
        <div className="space-y-8">
          <h1 className="text-center font-aller text-5xl font-extrabold uppercase leading-[90px] text-primary md:text-left md:text-7xl">
            BENERATOR
          </h1>
          <p className="px-2 text-center text-3xl font-light uppercase text-primary md:px-0 md:text-left md:text-5xl">
            The smart way to handle data
          </p>
        </div>
      </div>
      <ul className="flex flex-col items-center gap-16 py-8 md:w-full md:flex-row md:justify-around md:gap-28">
        {HeroItems.map((item) => (
          <li key={item.text} className="flex flex-col justify-between gap-8">
            <Image
              className="mx-auto h-[100px] w-[130px]"
              src={item.img}
              alt={item.text}
            />
            <p className="text-center text-lg font-bold uppercase text-primary">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
