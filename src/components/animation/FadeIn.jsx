import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    transform: translate(0,-10px);
    opacity: 0;
  }

  to {
    transform: translate(0,0);
    opacity: 1;
}`

const FadeIn = styled.div`
  display: inline-block;
  animation: ${fadeIn} 1s ease-out;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

export default FadeIn
