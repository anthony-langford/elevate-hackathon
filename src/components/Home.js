import React from 'react'
import styled from 'styled-components'

// Import components
import Slider from './Slider'

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #1e2029;
  background: #FFFEFF;
  bottom: 0px;
`

class Home extends React.Component {

  render() {

    return (
      <React.Fragment>
        <ContentWrapper>
          <iframe
            title={'map'}
            width={"100%"}
            height={"450"}
            frameBorder={"0"}
            style={{'border': 0}}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4394551531486!2d-79.39082058417317!3d43.659829479121136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b7ccd8ba1f%3A0x7e6f7af0cc4e65f3!2sMaRS+Discovery+District!5e0!3m2!1sen!2sca!4v1537649955095?key=${process.env.REACT_APP_MAP_API_KEY}`}
            allowFullScreen
          >
          </iframe>
          <div>
            <Slider />
          </div>
        </ContentWrapper>
      </React.Fragment>
    )
  }
}

export default Home