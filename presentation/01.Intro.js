import React from "react";

import {
  Heading,
  Text,
  Image,
  Layout,
  Fill,
  Link
} from "spectacle";

export default function Intro({image}) {
  return (
    <div>
      <Heading size={1} textColor="tertiary">Welcome!</Heading>
      <Heading size={4} textColor="primary" margin="100px">Kimberly Noel</Heading>
      <Layout>
        <Fill>
          <Image src={image} height="200px" />
        </Fill>
      </Layout>
      <Text>
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
