import React from "react";
import Header from "@/components/Header/Header";
import SideNav from "@/components/SideNav";
import styled from "styled-components";

export default function SNBLayout({ children }) {
  return (
    <Wrapper>
      {/* <Header /> */}
      <BodyContent>
        <SideNav />
        {children}
      </BodyContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: calc(100vw - 270px - var(--scrollbar-width));
  align-content: flex-end;
`;

const BodyContent = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
  margin-left: 270px;
`;
