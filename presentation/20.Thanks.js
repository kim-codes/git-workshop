import React from "react";

import {
  Heading,
  Image
} from "spectacle";

export default function Thanks({image}) {
  return (
    <div>
      <Heading size={4} textColor="tertiary">Big thank you to {'@'}gillchristian for making these slides!!! </Heading>
    <Image src={image} width={550} />
    </div>
  );
}
