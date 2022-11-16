import React, { useEffect, useState } from "react";

//Hard coded value
const testimonialArr: { source: string; quote: string; link: string }[] = [
  {
    source: "softwaretestinghelp.com, 2020",
    quote:
      "Benerator is the perfect choice for creating consistent and complex test data synthetically or anonymized from production environments. The new BeneratorUI closes a long overdue gap.",
    link: "www.softwaretestinghelp.com/test-data-generation-tools",
  },
  {
    source: "Tim Lafferenz, Leading Test Expert",
    quote:
      "Benerator is the perfect choice for creating consistent and complex test data synthetically or anonymized from production environments. The new BeneratorUI closes a long overdue gap.",
    link: "A.P. Møller – Mærsk A/S",
  },
  {
    source: "sourceforge.net, Download Stats API",
    quote:
      "Benerator is the perfect choice for creating consistent and complex test data synthetically or anonymized from production environments. The new BeneratorUI closes a long overdue gap.",
    link: "sourceforge.net/projects/benerator/reviews",
  },
];

export const Testimonial = () => {
  const [index, setIndex] = useState<number>(0);

  //* This delay is the time each testimonial appear on the UI, if need to update this number, please update the animation time in tailwind.config (animation-fade-in-out) to make sure the animation match
  const delay = 5000;

  //   Effect to make each testimonial appear one by one
  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonialArr.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
    return () => clearTimeout(timeOutID);
  }, [index]);

  return (
    <div>
      <div className="wrapper min-h-[500px] px-5 py-12 md:min-h-min lg:px-24">
        <ul className="grid grid-cols-1 text-center">
          {testimonialArr.map((testimonial, listIndex) => (
            <li
              key={testimonial.source}
              className={`${
                listIndex === index
                  ? `visible animate-fade-in-out space-y-8`
                  : `sr-only invisible`
              } `}
            >
              <q className="text-lg italic">{testimonial.quote}</q>
              <h3 className="text-xl font-semibold">{testimonial.source}</h3>
              <p className="break-all">{testimonial.link}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
