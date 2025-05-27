import React from "react";

import { Container } from "../../Container/index";
// import { CountDown } from "../../CountDown/index";
import { Logo } from "../../Logo/index";
import { Menu } from "../../Menu/index";
import { Footer } from "../../Footer/index";
// import { MainForm } from "../../MainForm/index";

type MainTemplateProps = {
    children?: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

       {children} 

      {/* <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container> */}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
