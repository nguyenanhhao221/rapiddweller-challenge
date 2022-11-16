import React from "react";

export const IntroduceMoreSection = () => {
  return (
    <div>
      <div className="bg-background-light-blue ">
        <div className="wrapper flex flex-col items-center gap-8 px-5 py-12 lg:px-24">
          <div className=" space-y-4 text-center">
            <h2 className="leading-9">Learn more in our BENERATOR manual</h2>
            <p className="text-lg">
              Learn simply more about BENERATOR, the powerful BENERATOR UI, and
              our BENERATOR packages to handle your data smart and safely. We
              provide guidance, code snippets, and more to get you started fast
              with a steep learning curve. Get your BENERATOR handout and start
              benerating now.
            </p>
          </div>
          <button
            className="rounded-md bg-primary px-6 py-4 text-lg text-white transition-colors hover:bg-[#47c9af]"
            type="button"
          >
            Download BENERATOR Manual
          </button>
        </div>
      </div>
      <div className="bg-background-white ">
        <div className="wrapper flex flex-col items-center gap-8 px-5 py-12 lg:px-24">
          <div className=" space-y-4 text-center">
            <h2 className="leading-9">We do more for you!</h2>
            <p className="text-lg leading-9">
              Do you need support to implement Benerator? <br />
              Do you want to know,how we can make your testing process a success
              with Benerator? <br />
              Meet the team behind Benerator and explore our solution portfolio:
            </p>
          </div>
          <a
            href="https://rapiddweller.com/"
            rel="noopener noreferrer"
            className="text-[#47c9af] hover:underline"
          >
            www.rapiddweller.com
          </a>
        </div>
      </div>
      j
    </div>
  );
};
