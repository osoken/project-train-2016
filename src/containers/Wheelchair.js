import React from 'react'
import { connect } from 'react-redux'
import { setWheelchair } from '../actions'
import { Link } from 'react-router'

const WHEELCHAIR = {
  MANUAL: 'manual',
  ELECTRIC: 'electric',
  SPECIAL: 'special'
}

let Wheelchair = ( {dispatch, wheelchair} ) => (
  <div>
    <h1>あなたの車いすのタイプは？</h1>
    <div>
      <div>{ wheelchair }</div>
      <ul>
        <li><input type="radio" name="wheelchair"
          checked={wheelchair === WHEELCHAIR.MANUAL}
          onClick={ () => {
            dispatch( setWheelchair(WHEELCHAIR.MANUAL) )
          }
        } />自操式車いす</li>
        <li><input type="radio" name="wheelchair"
          checked={wheelchair === WHEELCHAIR.ELECTRIC}
          onClick={ () => {
            dispatch( setWheelchair(WHEELCHAIR.ELECTRIC) )
          }
        }  />電動車いす</li>
        <li><input type="radio" name="wheelchair"
          checked={wheelchair === WHEELCHAIR.SPECIAL}
          onClick={ () => {
            dispatch( setWheelchair(WHEELCHAIR.SPECIAL) )
          }
        }  />特殊車いす（馬力あり）</li>
      </ul>
    </div>
    <div>
      <button type="button"><Link to={`dest`}>それでは、まず目的地を選びます</Link></button>
    </div>
  </div>
)

let mapStateToProps = (state) => {
  return state
}
Wheelchair = connect( mapStateToProps )(Wheelchair)

export default Wheelchair
