import React from "react";

import {
  Heading,
   Link,
   Text
} from "spectacle";

export default function Me() {
  return (
    <div>
    <Heading size={1} textColor="tertiary" margin="0px 0px 100px">Welcome!</Heading>
      <Heading size={4} textColor="tertiary">Kimberly Noel</Heading>
      <Text margin="50px 0px 0px">
        <Link href="https://education.github.com/experts" target="_blank" textColor="quaternary">
          Campus Expert
        </Link>
        {' @ '}
        <Link href="https://education.github.com/" target="_blank" textColor="quaternary">
          GitHub
        </Link>
      </Text>
    </div>
  );
}
