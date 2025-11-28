"use server";

import { notFound } from "next/navigation";
import qs from "qs";

export async function getNews(id?: string | null) {

  const newsQuery = qs.stringify({
    filters: {
      slug: {
        $eq: id,
      },
    },
    populate: "*",
  });

  const res = await fetch(
    `http://localhost:1337/api/news-collections?${newsQuery}`
  );

  const resJson = await res.json();

  // console.log(await resJson.data);
  const data = await resJson.data;

    return (!data[0]) ? notFound() : data;

}
