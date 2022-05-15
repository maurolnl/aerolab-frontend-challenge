export const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_AEROLAB_PRIVATE_TOKEN,
    },
  }).then((res) => res.json());
