"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        value={searchText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none focus:ring-2 focus:bg-whote/10 ring-accent/50 transition"
        placeholder="Search events in any city "
        spellCheck={false}
      />
    </form>
  );
}
