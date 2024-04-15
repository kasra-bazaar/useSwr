/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { type Key } from "react";
import useFetchData from "~/hooks/useFetchData";

export default function Comments() {
  const { data, isLoading, error } = useFetchData();

  if (isLoading) {
    return (
      <div>
        <h2>Hello there this is a practice with SWR :) </h2>
        <p> Loading ...</p>
      </div>
    );
  }

  if (error) {
    return <p> opps somthing went wrong ....!</p>;
  }
  return (
    <main className="">
      <h2> Hello there this is a practice with SWR :)</h2>
      <ul>
        {data.map((item: any, index: Key) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
