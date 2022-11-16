import Image from "next/image";
import Link from "next/link";
import React from "react";
import BeneratorUIImg from "../../public/assets/images/product_landing_page/benerator-ui.webp";
import BeneratorUIEditorImg from "../../public/assets/images/product_landing_page/ben-ui-editor.webp";

export const UISection = () => {
  return (
    <div>
      <div className="odd:bg-background-light-gray even:bg-white">
        <div className="wrapper grid grid-cols-1 gap-8 px-5 py-12  md:grid-cols-2 md:place-items-center lg:px-24">
          <Image placeholder="blur" alt="benerator ui" src={BeneratorUIImg} />
          <div className="flex flex-col gap-8">
            <h2>Get started with the new Benerator UI</h2>
            <Link
              className="inline w-fit rounded-md bg-primary px-6 py-4 text-lg text-white"
              href="/"
            >
              Check Features
            </Link>
          </div>
        </div>
      </div>
      <div className="odd:bg-background-light-gray even:bg-white">
        <div className="wrapper grid grid-cols-1 gap-8 px-5 py-12  md:grid-cols-2 md:place-items-center lg:px-24">
          <div className="order-2 flex flex-col gap-8 md:order-1">
            <h2>Modern Editor</h2>
            <p>
              Take advantage of context-sensitive autocompletion. Checkout,
              commit, and reset your project with integrated git.
            </p>
            <Link
              className="inline w-fit rounded-md bg-primary px-6 py-4 text-lg text-white"
              href="/"
            >
              Order now
            </Link>
          </div>
          <Image
            alt="Benerate with our powerful editor"
            src={BeneratorUIEditorImg}
            className="order-1 md:order-2"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};
