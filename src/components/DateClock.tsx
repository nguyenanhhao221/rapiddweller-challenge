import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";

// Create a shortcode [rapiddweller-time-vn] and use it in the theme footer.

// a) Add the shortcode as function in the functions.php
// b) The shortcode should display the date/time as in the following example: 12-Dec-2022@13:55 (HCM) (hint: d-Y-M H:i)
// c) Implement the shortcode in the landing page footer - anywhere you like.

/**
 * This component display the Date and Time using the Browser Date. The Idea is when this component first mount, we use the Date object to get the current Date and Time from the Browser and display it to the user.
 * Along side that, the useEffect hook will fire a function to "reset" the date state every 1 second with the latest Date Object.
 * In other words, the component will re-render every 60s to display to the user the latest time.
 *
 * @returns Date Time Format
 */
const DateClock = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setDate(new Date());
    }, 1000);
    return () => clearTimeout(timeOutID);
  }, [date]);

  return (
    <div>
      <div>
        <time>
          {/* The Date */}
          {formatDate(date, {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })
            .split(" ")
            .join("-")}
          @{/* The Time */}
          {formatDate(date, {
            hour: "numeric",
            minute: "numeric",
          })}
        </time>
      </div>
    </div>
  );
};

export default DateClock;
