import React from 'react'
import { connect } from 'react-redux'

let Destination = ( {dispatch, destination} ) => (
    <div>
      <div>どこにいきたいですか？</div>
      <div>
        map
      </div>
      <div>
        <button type="button">次は、出発場所を決めます</button>
      </div>
    </div>
  )

let mapStateToProps = (state) => {
  return state
}
Destination = connect( mapStateToProps )(Destination)

export default Destination
