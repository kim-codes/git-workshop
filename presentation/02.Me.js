import React from "react";

import {
   Heading,
   Link,
   Text,
   Layout,
   Fill,
   Image
} from "spectacle";

export default function Me({image}) {
  return (
    <div>
      <Heading size={2} textColor="tertiary">Kimberly Noel</Heading>
      <Heading size={4} margin="50px 0px 0px">
        <Link href="https://education.github.com/experts" target="_blank" textColor="quaternary">
          GitHub Campus Expert
        </Link>
        <Text size={2} textColor="senary">
        {' & '}
        </Text>
        <Link href="https://education.github.com/" target="_blank" textColor="quaternary">
          Future Developer Evangelist Intern
        </Link>
      </Heading>
      <Layout>
      <Fill>
        <Image src={image} height="300px"/>
      </Fill>
      </Layout>
    </div>
  );
}
