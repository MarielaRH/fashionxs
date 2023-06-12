import { NextApiRequest, NextApiResponse } from "next";

export default async function getProductById(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { slug } = request.query;

  if (slug) {
    await fetch(`${process.env.BASE_URL_API}/products/${slug[1]}`)
      .then((resp) => resp.json())
      .then((resp) => {
        response.status(200).json({
          status_code: 200,
          message: "OK",
          product: resp,
        });
      })
      .catch(() => {
        response.json({
          error: "Error",
          message: "Something went wrong!",
        });
      });
  }
}
