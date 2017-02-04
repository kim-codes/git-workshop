import React from "react";

import {
  Appear,
  Heading
} from "spectacle";

export default function Solution() {
  return (
    <Appear fid="1">
      <Heading size={2} caps fit textColor="primary">
      It’s a software tool that helps a software team manage changes made to their source code.
      It keeps track of every change (modification, deletion, addition, etc.).
      </Heading>
    </Appear>
  );
}
