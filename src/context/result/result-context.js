import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

const ResultContext = createContext({
  result: [],
  total: 0,
  resultDispatch: () => {},
});

const resultReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE': {
      return { ...state, result: [], total: 0 };
    }

    case 'UPDATE_RESULT': {
      let { question, selectedOptioin, answer, options } = action.payload;

      let newTotal = state.total + (selectedOptioin === answer ? 5 : 0);

      return {
        ...state,
        result: [
          ...state.result,
          { question, selectedOptioin, answer, options },
        ],
        total: newTotal,
      };
    }

    default:
      break;
  }
};

const ResultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resultReducer, { result: [] });

  const value = {
    result: state.result,
    total: state.total,
    resultDispatch: dispatch,
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
};

const useResult = () => useContext(ResultContext);

export { useResult, ResultProvider };
