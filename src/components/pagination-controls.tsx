import Link from "next/link";
import React from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  prevPath: string;
  nextPath: string;
};

const btnStyles =
  "text-white px-5 py-3 flex gap-2 items-center bg-white/5 rounded-md opacity-75 hover:opacity-100 tranistion text-sm";

export default function PaginationControls({
  prevPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {prevPath ? (
        <Link href={prevPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
