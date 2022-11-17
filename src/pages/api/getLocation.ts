import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ data: { city: string } } | { message: string }>
) => {
  //redirect back to homepage if the request method is not GET
  if (req.method !== "GET") {
    res.status(307).redirect("/");
    return;
  }
  const API_KEY = process.env.ABSTRACT_API;
  //Check if API_KEY exist in .env file to make sure it not undefined
  if (!API_KEY) {
    return res.status(404).send({ message: "Api key for API is not valid" });
  }
  const endpoint = `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      // * The API will return an object with lots of different keys, but since we only care about the "city" key, we just typed the response as follow for easy usage
      const jsonResponse: { city: string } = await response.json();
      return res.status(200).json({ data: { city: jsonResponse.city } });
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(404).send({ message: error.message });
    }
  }
  res.end();
};

export default handler;
