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
  animation: ${fadeOut} 1s linear;
  opacity: 0;
`

export default FadeOut
