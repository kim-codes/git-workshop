import React from "react";

import {
  Heading,
  List,
  ListItem,
  Layout,
  Fill
} from "spectacle";

const left = [
  'Versioning Systems',
  'Git',
  'Setup',
  'Clients',
  'GitHub',
  'Repositories'
];

const right = [
  'Commit',
  'Push & Remote',
  'Branches',
  'Update & Merge',
  'Useful Resources'
];

const listItems = list => (
  <List textColor="tertiary">
    {list.map(
      (item, key) => <ListItem key={key}>{item}</ListItem>
    )}
  </List>
);

export default function Roadmap() {
  return (
    <div>
      <Heading>Content For Today</Heading>
      <Layout>
        <Fill>
          {listItems(left)}
        </Fill>
        <Fill>
          {listItems(right)}
        </Fill>
      </Layout>
    </div>
  );
}
