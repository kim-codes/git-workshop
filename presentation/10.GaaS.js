import React from "react";

import {
  Layout,
  Fill,
  Heading,
  Link
} from "spectacle";

export default function GaaS() {
  return (
    <div>
      <Heading>
        <Link href="https://github.com" target="_blank" textColor="senary">
          GitHub
        </Link>
      </Heading>
      <Heading textColor="quaternary" margin="30px auto">
        <Link href="https://bitbucket.com" target="_blank" textColor="senary">
          Bitbucket
        </Link>
      </Heading>
      <Heading textColor="quaternary">
        <Link href="https://about.gitlab.com/" target="_blank" textColor="senary">
          GitLab
        </Link>
      </Heading>
    </div>
  );
}
