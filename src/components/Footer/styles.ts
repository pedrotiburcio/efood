import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Logos = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`

export const FooterContainer = styled.div`
  padding: 40px 0;
  background-color: ${colors.pink};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 10px;
    color: ${colors.darkPink};
    width: 480px;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`
