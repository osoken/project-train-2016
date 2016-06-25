import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

let Way = ( {dispatch, way} ) => (
    <div>
      <div>
        <div>出発地</div>
        <div>大岡山駅</div>
      </div>
      <img src="" alt=""/>
      <div>
        <div>目的地</div>
        <div>劇団四季（大井町駅）</div>
      </div>
    </div>
  )

let mapStateToProps = (state) => {
  return state
}
Way = connect( mapStateToProps )(Way)

export default Way
