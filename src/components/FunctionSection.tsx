import Image from "next/image";
import React from "react";
import Img1 from "../../public/assets/images/product_landing_page/benerator_generate.svg";
import Img2 from "../../public/assets/images/product_landing_page/benerator_anonymize.svg";
import Img3 from "../../public/assets/images/product_landing_page/benerator_migrate.svg";

export const FunctionSection = () => {
  return (
    <div>
      {/* Each Item */}
      <div className="odd:bg-background-light-blue even:bg-white">
        <div className="wrapper grid grid-cols-1 px-5  py-12 md:grid-cols-2 md:place-items-center lg:px-24">
          <div>
            <h2>Generate data</h2>
            <ol className="mt-10 list-disc pl-10 text-lg">
              <li>Describe your data model on an abstract level in XML</li>
              <li>
                Involve your business people as no developer skills are
                necessary
              </li>
              <li>Use a wide range function library to fake realistic data</li>
              <li>Write your own extensions in Javascript or Java</li>
              <li>Integrate your data processes into Gitlab CI or Jenkins</li>
            </ol>
          </div>
          <Image
            className="h-auto w-full place-self-center object-contain object-center"
            src={Img1}
            alt="generate data with benerator"
          />
        </div>
      </div>
      {/* Each Item */}
      <div className="odd:bg-background-light-blue even:bg-white">
        <div className="wrapper grid grid-cols-1 px-5  py-12 md:grid-cols-2 md:place-items-center lg:px-24">
          <div>
            <h2>Anonymize and Pseudonymize data</h2>
            <ol className="mt-10 list-disc pl-10 text-lg">
              <li>
                Define processes to anonymize or pseudonymize data in plain XML
                on abstract level without the need of developer skills
              </li>
              <li>
                Stay GDPR compliant with your data and protect the privacy of
                your customers
              </li>
              <li>
                Mask and obfuscate sensitive data for BI, test, development or
                training purposes
              </li>
              <li>
                Combine data from various sources (subsetting) and keep the data
                integrity
              </li>
            </ol>
          </div>
          <Image
            className="h-auto w-full place-self-center object-contain object-center"
            src={Img2}
            alt="Anonymize and Pseudonymize data with benerator"
          />
        </div>
      </div>
      {/* Each Item */}
      <div className="odd:bg-background-light-blue even:bg-white">
        <div className="wrapper grid grid-cols-1 px-5  py-12 md:grid-cols-2 md:place-items-center lg:px-24">
          <div>
            <h2>Migrate data</h2>
            <ol className="mt-10 list-disc pl-10 text-lg">
              <li>Migrate and transform your data in multisystem landscapes</li>
              <li>
                Reuse your testing data models to migrate production
                environments
              </li>
              <li>
                Keep your data consistent and reliable in a microsystem
                architecture
              </li>
            </ol>
          </div>
          <Image
            className="h-auto w-full place-self-center object-contain object-center"
            src={Img3}
            alt="Migrate data data with benerator"
          />
        </div>
      </div>
    </div>
  );
};
