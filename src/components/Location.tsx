import React, { useEffect, useState } from "react";

/**
 * Display the location of the user by using external API service and the user IP address.
 *
 * @returns The location determined from user IP address. Results can be incorrect if the IP address is provided incorrectly (user might user VPN and alter the real IP address)
 */
export const Location = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  //useEffect is not recommend as a place to call API , but for the simplicity and avoid install 3rd party libraries, we will use for now
  useEffect(() => {
    setLoading(true);
    const getLocation = async () => {
      try {
        const response = await fetch("/api/getLocation");
        if (response.ok) {
          const jsonResponse: { data: { city: string } } =
            await response.json();
          setLoading(false);
          return setLocation(jsonResponse.data.city);
        }
        throw new Error("Network error");
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
