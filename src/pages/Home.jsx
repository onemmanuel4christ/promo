import styled from "styled-components"
import Description from "../components/Description"
import Distributors from "../components/Distributors"
import Hero from "../components/Hero"
import SellerSection from "../components/SellerSection"

const Container = styled.div`
`

const Home = () => {
  return (
    <Container>
      <Hero />
      <Description />
      <Distributors />
      <SellerSection />
    </Container>
  )
}

export default Home
