import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
class ScoreContainer extends Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
           Team Selectors Go Here
          </Row>
          <Row>
            Scoreboard Goes Here
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer)
