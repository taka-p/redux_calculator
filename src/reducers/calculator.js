import actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
  lastCalcType: ''
};

const calculator = (state = initialAppState, action) => {
  let resultValue;

  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false
      };
    case actionTypes.PLUS:
      return {
        ...state,
        inputValue: 0,
        resultValue: state.resultValue + state.inputValue,
        showingResult: true,
        lastCalcType: '+'
      };
    case actionTypes.MINUS:
      if (state.resultValue) {
        resultValue = state.resultValue - state.inputValue;
      } else {
        resultValue = state.inputValue;
      }

      return {
        ...state,
        inputValue: 0,
        resultValue: resultValue,
        showingResult: true,
        lastCalcType: '-'
      };
    case actionTypes.CLEAR:
      return {
        ...initialAppState,
        showingResult: true
      };
    case actionTypes.ENTER:
      if (state.lastCalcType === '+') {
        resultValue =  state.resultValue + state.inputValue;
      } else if (state.lastCalcType === '-') {
        resultValue =  state.resultValue - state.inputValue;
      } else {
        return state;
      }

      return {
        ...state,
        inputValue: 0,
        resultValue: resultValue,
        showingResult: true
      };
    default:
      return state;
  }
};

export default calculator;
