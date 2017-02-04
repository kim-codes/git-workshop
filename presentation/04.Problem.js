import React from "react";

import {
  Heading,
  Image,
  Layout,
  Fill
} from "spectacle";

export default function Problem({images}) {
  return (
    <div>
      <Heading size={1} caps fit textColor="tertiary">Version Control Systems</Heading>
      <Layout>
        <Fill>
            <Image src={images.git} />
            <Image src={images.mer} />
            <Image src={images.sub} />
        </Fill>
      </Layout>
    </div>

  );
}
