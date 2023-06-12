// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getAllProducts(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    await fetch(`${process.env.BASE_URL_API}/products`)
      .then(async (res) => {
        const products = await res.json();
        response.status(200).json({
          data: {
            status_code: 200,
            message: "OK",
            products: products,
          },
        });
      })
      .catch((error) => {
        response.status(200).json({
          data: {
            status_code: 200,
            message: "Error",
          },
        });
      });
  }
}
