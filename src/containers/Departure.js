import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

let Departure = ( {dispatch, departure} ) => (
    <div>
      <div>
        <input type="text" placeholder="どこから出発しますか？"/>
      </div>
      <div>
        map
      </div>
      <div>
        <button type="button"><Link to={`way`}>道のりをみる</Link></button>
      </div>
    </div>
  )

let mapStateToProps = (state) => {
  return state
}
Departure = connect( mapStateToProps )(Departure)

export default Departure
