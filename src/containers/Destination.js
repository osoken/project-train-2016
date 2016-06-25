import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

let Destination = ( {dispatch, destination} ) => (
    <div>
      <div>
        <input type="text" placeholder="どこにいきたいですか？"/>
      </div>
      <div>
        map
      </div>
      <div>
        <button type="button"><Link to={`departure`}>次は、出発場所を決めます</Link></button>
      </div>
    </div>
  )

let mapStateToProps = (state) => {
  return state
}
Destination = connect( mapStateToProps )(Destination)

export default Destination
