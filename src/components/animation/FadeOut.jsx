import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  from {
    transform: translate(0,0);
    opacity: 1;
  }

  to {
    transform: translate(0,10px);
    opacity: 0;
}`

const FadeOut = styled.div`
  display: inline-block;
  animation: ${fadeOut} 1s linear;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  opacity: 0;
`

export default FadeOut
