"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    fetch("https://cbsbaikonur.ru/elcatalog")
      .then((data) => {
        console.log({ data });
      })
      .catch((err) => {
        console.log((err as Error).message);
      });
  }, []);

  return <div />;
}
