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
  animation: ${fadeIn} 0.25s ease-out;
`

export default FadeIn
