"use client";
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";
import { SWRConfig } from "swr";
import Comments from "~/components/comments/Index";

export default function HomePage() {
  return (
    <>
      <SWRConfig
        value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
      >
        <Comments />
      </SWRConfig>
    </>
  );
}
