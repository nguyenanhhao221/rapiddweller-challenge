import React, { useEffect, useState } from "react";

const Location = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  //useEffect is not recommend as a place to call API , but for the simplicity and avoid install 3rd party libraries, we will use for now
  //Fetch to /api/getLocation to get the location base on IP
  //Save that to sessionStorage to avoid api being re-fetch if the user refresh the page multiple time, this will over limit the api call
  //Only if the location doesn't already exist in session storage then allow it to make actually call to backend otherwise just get the location stored in sessionStorage
  useEffect(() => {
    setLoading(true);
    const isCityInStorage = sessionStorage.getItem("city");
    if (isCityInStorage && isCityInStorage !== null) {
      setLoading(false);
      return setLocation(isCityInStorage);
    }
    const getLocation = async () => {
      try {
        const response = await fetch("/api/getLocation");
        if (response.ok) {
          const jsonResponse: { data: { city: string } } =
            await response.json();
          setLoading(false);
          setLocation(jsonResponse.data.city);
          sessionStorage.setItem("city", jsonResponse.data.city);
          return;
        }
        throw new Error(`Request failed:${response.statusText}`);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error(
          `Unknown error occur: ${error}, check console for more detail`
        );
      }
    };
    getLocation();
    return;
  }, []);

  if (loading) return <div>Location Loading...</div>;
  return <div>{location}</div>;
};

export default Location;
