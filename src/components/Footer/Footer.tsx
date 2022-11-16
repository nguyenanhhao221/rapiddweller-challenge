import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="wrapper px-5 py-12 lg:px-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-white">
                  LEARN HOW TO USE BENERATOR THE MOST EFFICIENT WAY
                </h4>
                <ul className="list-disc pl-6 text-lg marker:text-[#47c9af]">
                  <li>
                    <a
                      href="https://rapiddweller.com/"
                      rel="noopener noreferrer"
                      className="text-[#47c9af] hover:underline"
                    >
                      www.rapiddweller.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://rapiddweller.com/"
                      rel="noopener noreferrer"
                      className="text-[#47c9af] hover:underline"
                    >
                      www.rapiddweller.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://rapiddweller.com/"
                      rel="noopener noreferrer"
                      className="text-[#47c9af] hover:underline"
                    >
                      www.rapiddweller.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-white">ABOUT US</h4>
                <ul className="list-disc pl-6 text-lg marker:text-[#47c9af]">
                  <li>
                    <a
                      href="https://rapiddweller.com/"
                      rel="noopener noreferrer"
                      className="text-[#47c9af] hover:underline"
                    >
                      www.rapiddweller.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://rapiddweller.com/"
                      rel="noopener noreferrer"
                      className="text-[#47c9af] hover:underline"
                    >
                      www.rapiddweller.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://rapiddweller.com/"
                      rel="noopener noreferrer"
                      className="text-[#47c9af] hover:underline"
                    >
                      www.rapiddweller.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-white">CONTACT US</h4>
                <ul className="text-lg text-[#47c9af] marker:text-[#47c9af]">
                  <li>
                    <a
                      href="tel:+494060439203"
                      title="Call us"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="inline h-5 w-5 fill-[#47c9af]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      <span>+49 40 60439203</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:team@rapiddweller.com"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 fill-[#47c9af] stroke-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <span>team@rapiddweller.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-white">FOLLOW US</h4>
                <ul className="flex gap-4 text-lg text-[#47c9af] marker:text-[#47c9af]">
                  <li>
                    <a
                      href="facebook.com"
                      title="Go To facebook"
                      className="hover:underline"
                    >
                      <AiFillFacebook className="h-8 w-8" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="twitter.com"
                      title="Go To twitter"
                      className="hover:underline"
                    >
                      <AiFillTwitterSquare className="h-8 w-8" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="linkedin.com"
                      title="Go To linkedin"
                      className="hover:underline"
                    >
                      <AiFillLinkedin className="h-8 w-8" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-white">OUR MISSION</h4>
                <blockquote className="text-lg text-white">
                  “We are driving the digital transformation by automating
                  monotonous dweller tasks to leave meaningful work for humans.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-white">
        <div className="wrapper px-5 py-12 lg:px-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <p>
              © Copyright 2019-2022, rapiddweller GmbH. All rights reserved.
            </p>
            <ul className="flex items-center justify-between gap-2 ">
              <li>Privacy Policy</li>
              <li>Imprint</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
