import React from "react";

import {
  Heading,
  Text,
  Image,
  Layout,
  Fill
} from "spectacle";

export default function Intro({image}) {
  return (
    <div>
      <Heading size={1} textColor="tertiary">Welcome!</Heading>
      <Heading size={4} textColor="quaternary" margin="100px">Intro to Version Control</Heading>
      <Layout>
        <Fill>
          <Image src={image} height="200px" />
        </Fill>
      </Layout>
    </div>
  );
}
