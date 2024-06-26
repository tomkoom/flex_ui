import React, { FC } from "react"
import { styled } from "styled-components"
import {
  Header,
  Metadata,
  Description,
  CanisterBalances,
  Socials,
} from "./_index"

const Home: FC = (): JSX.Element => {
  return (
    <HomeStyled>
      <Header />
      <Metadata />
      <Description />
      <CanisterBalances />
      <Socials />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export default Home
