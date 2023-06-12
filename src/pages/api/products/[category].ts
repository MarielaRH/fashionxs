import { CATEGORIES_FETCH } from "@/utils/constants/categories";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getProductsByCategory(
  request: NextApiRequest,
  response: NextApiResponse<any>
) {
  const { category } = request.query;

  await fetch(
    `${process.env.BASE_URL_API}/products/category/${
      CATEGORIES_FETCH[category as string]
    }`
  )
    .then((resp) => resp.json())
    .then((resp) => {
      response.status(200).json({
          status_code: 200,
          message: "OK",
          products: resp,
      });
    })
    .catch(() => {
      response.json({
        error: 'Error',
        message: "Something went wrong!",
        
      });
    });
}
