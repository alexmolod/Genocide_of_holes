import { ADD_POINT } from '../actions/actions';

const initialState = {
  points: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POINT:
            return {
              points: state.points + 1
            };
        default:
            return state
    }
}
