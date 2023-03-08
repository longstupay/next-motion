import { useReducer, useEffect } from "react";

type Action =
  | {
      type: "SET_CURRENT_ID";
      payload: string;
    }
  | {
      type: "SET_IS_NAV_SHOW";
      payload: boolean;
    };

type State = {
  currentId: string;
  isNavShow: boolean;
};

const initialState: State = {
  currentId: "home",
  isNavShow: true,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CURRENT_ID":
      return { ...state, currentId: action.payload };
    case "SET_IS_NAV_SHOW":
      return { ...state, isNavShow: action.payload };
    default:
      throw new Error();
  }
}

export default function useControlPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        dispatch({ type: "SET_IS_NAV_SHOW", payload: true });
        dispatch({ type: "SET_CURRENT_ID", payload: "home" });
      }
      window.scrollY !== 0 &&
        dispatch({ type: "SET_IS_NAV_SHOW", payload: false });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    currentId: state.currentId,
    setCurrentId: (id: string) =>
      dispatch({ type: "SET_CURRENT_ID", payload: id }),
    isNavShow: state.isNavShow,
    setIsNavShow: (isShow: boolean) =>
      dispatch({ type: "SET_IS_NAV_SHOW", payload: isShow }),
  };
}
