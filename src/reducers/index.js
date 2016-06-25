import {
    combineReducers
} from 'redux'
import counter from './counter'
import wheelchair from './wheelchair'

const app = combineReducers( {
    counter,
    wheelchair
} )

export default app
