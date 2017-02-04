import React from "react";

import {
  Heading,
  Image,
  Layout,
  Fill
} from "spectacle";

export default function Component({image}) {
  return (
    <div>
        <Heading size={4} textColor="senary">
          These companies provide services to host your source code.
        </Heading>
        <Heading size={4} textColor="senary" margin="50px 0px 0px">
          We use "git" commands to talk to them.
        </Heading>
          <Layout>
          <Fill>
            <Image src={image} />
          </Fill>
          </Layout>
      </div>
  );
}
