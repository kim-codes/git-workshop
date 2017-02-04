import React from "react";

import {
  Heading,
  Link
} from "spectacle";

export default function Setup() {
  return (
    <div>
      <Heading caps textColor="quinary">Setup</Heading>
      <Heading size={4} margin="50px auto 25px">
        <Link href="https://git-scm.com/download" target="_blank" textColor="senary">
          git-scm.com/download
        </Link>
      </Heading>
      <Heading size={4}>
        <Link href="https://www.gitkraken.com/download" target="_blank" textColor="senary">
          gitkraken.com/download
        </Link>
      </Heading>
    </div>
  );
}
