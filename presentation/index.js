// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import slides
import Intro from "./01.Intro";
import Me from "./02.Me";
import Roadmap from "./03.Roadmap";
import Problem from "./04.Problem";
import Solution from "./05.Solution";
import Git from "./07.Git";
import Setup from "./08.Setup";
import Clients from "./09.Clients";
import GaaS from "./10.GaaS";
import AllTheThings from "./06.AllTheThings";
import HowItWorks from "./11.HowItWorks";
import Config from "./11.1.Config";
import Create from "./12.Create";
import AddCommit from "./13.AddCommit";
import Push from "./14.Push";
import Branches from "./15.Branches";
import UpdateAndMerge from "./16.UpdateAndMerge";
import Resources from "./18.Resources";
import Questions from "./19.Questions";
import Thanks from "./20.Thanks";

// Import notes
import {notes, titlelize} from './notes'

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  branches: require("../assets/branches.png"),
  city: require("../assets/city.jpg"),
  client: require("../assets/client.png"),
  foldersMess: require("../assets/git-mess.png"),
  foldersBetter: require("../assets/git-better.png"),
  gitLogo: require("../assets/git-logo.png"),
  gitLogoColor: require("../assets/git-logo-1.png"),
  gitHubLogo: require("../assets/githublogo.png"),
  howGitWorks: require("../assets/how-git-works.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  mercurial: require("../assets/mercurial-icon.png"),
  office: require("../assets/office.jpg"),
  setup: require("../assets/setup.jpg"),
  subversion: require("../assets/subversion_logo.png"),
  terminal: require("../assets/terminal.png"),
  thanks: require("../assets/last-img.gif"),
  versionControl: require("../assets/version-control.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#DC5151",
  secondary: "#333333",
  tertiary: "white",
  quaternary: "black",
  quinary: "#E57254",
  senary: "#46BCDE",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={750}>
          <Slide bgColor="secondary" notes={titlelize(notes.intro)}>
            <Intro image={images.versionControl.replace("/", "")}/>
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.me)}>
            <Me image={images.gitHubLogo.replace("/", "")}/>
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.roadmap)}>
            <Roadmap />
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.problem)}>
            <Problem
              images={{
                git: images.gitLogo.replace("/", ""),
                mer: images.mercurial.replace("/", ""),
                sub: images.subversion.replace("/", ""),
                better: images.foldersBetter.replace("/", ""),
              }}
            />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.solution)}
          >
            <Solution />
          </Slide>
          <Slide

            align="center center"
            notes={titlelize(notes.git)}
            bgImage={images.terminal.replace("/", "")}
            bgDarken={0.75}
          >
            <Git image={images.gitLogoColor.replace("/", "")} />
          </Slide>
          <Slide
            bgColor="secondary"
            notes={titlelize(notes.setup)}
          >
            <Setup />
          </Slide>
          <Slide
            bgImage={images.client.replace("/", "")}
            bgDarken={0.75}
            notes={titlelize(notes.clients)}
          >
            <Clients />
          </Slide>
          <Slide
            bgImage={images.office.replace("/", "")}
            bgDarken={0.75}
            notes={titlelize(notes.gaas)}
          >
            <GaaS />
          </Slide>
          <Slide
            bgColor="secondary"
            notes={titlelize(notes.allTheThings)}
          >
            <AllTheThings image={images.gitHubLogo.replace("/", "")} />
          </Slide>
          <Slide
            bgColor="primary"
            bgColor="#4c0d09"
            notes={titlelize(notes.howItWorks)}
          >
            <HowItWorks image={images.howGitWorks.replace("/", "")} />
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.create)}>
            <Config />
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.create)}>
            <Create />
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.addCommit)}>
            <AddCommit />
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.push)}>
            <Push />
          </Slide>
          <Slide bgColor="black" notes={titlelize(notes.branches)}>
            <Branches image={images.branches.replace("/", "")} />
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.updateAndMerge)}>
            <UpdateAndMerge />
          </Slide>
          <Slide bgColor="primary" notes={titlelize(notes.resources)}>
            <Resources />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.questions)}>
            <Questions />
          </Slide>
          <Slide
            bgColor="primary"
            transition={["spin", "slide"]}
            notes={titlelize(notes.thanks)}
          >
            <Thanks image={images.thanks.replace("/", "")} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
