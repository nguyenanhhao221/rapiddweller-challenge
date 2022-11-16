import React from "react";
import { CTAButton } from "./CTAButton";

export const SubscribeNews = () => {
  return (
    <div className="bg-primary text-white">
      <div className="wrapper grid grid-cols-1 gap-8 px-5 py-12 md:grid-cols-2 md:place-items-center lg:px-24">
        <div className="space-y-6">
          <h2 className="uppercase text-white">
            Do you want to get the benerator news
          </h2>
          <p>
            It’s a free collection of tips we don’t share elsewhere.
            <br />
            Learn first-hand insights on tricks and tweaks for your test data
            project! Not sure? Try now:
          </p>
        </div>
        <form action="#" className="space-y-4 text-left">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            required
            className="w-full rounded-md px-4 py-1 text-black"
          />
          <br />
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value="agree"
            required
            className="mr-2"
            title="agree to receive communications from rapiddweller GmbH"
          />
          <span className="text-sm">
            I agree to receive communications from rapiddweller GmbH.
            <span className="text-red-500">*</span>
          </span>
          <br />
          <div className="flex cursor-pointer items-center justify-center">
            <input
              type="submit"
              value="Get it"
              className="cursor-pointer bg-[#47c9af] py-3 px-6 uppercase text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
