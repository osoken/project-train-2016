const wheelchair = ( state='manual', action ) => {
    switch ( action.type ) {
    case 'SET':
        return action.value
    default:
        return state
    }
}

export default wheelchair
