import styled from "styled-components"
import Description from "../components/Description"
import Hero from "../components/Hero"
import SellerSection from "../components/SellerSection"

const Container = styled.div`
`

const Home = () => {
  return (
    <Container>
      <Hero />
      <Description />
      <SellerSection />
    </Container>
  )
}

export default Home
