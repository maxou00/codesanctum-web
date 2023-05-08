import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useReducer } from "react";
import { FormPage, ResponsePage } from "../engine/page";
import {
  FilterActions,
} from "./creator";
import {
  initialFilterFormState,
  reduceFilterFormState,
} from "./reducers/collection";

function useCreateFormState(scheme: FormPage) {
  const [state, dispatch] = useReducer(
    reduceFilterFormState,
    {
      ...initialFilterFormState,
      form: scheme || initialFilterFormState.form
    }
  );

  const setForm = useCallback(
    (...params: Parameters<typeof FilterActions["setFormPage"]>) => {
      dispatch(FilterActions.setFormPage(...params));
    },
    []
  );

  const setFieldAnswer = useCallback(
    (...params: Parameters<typeof FilterActions["appendAnswer"]>) => {
      dispatch(FilterActions.appendAnswer(...params));
    },
    []
  );

  const setFieldError = useCallback(
    (...params: Parameters<typeof FilterActions["appendAnswerError"]>) => {
      dispatch(FilterActions.appendAnswerError(...params));
    },
    []
  );

  const reset = useCallback(
    (...params: Parameters<typeof FilterActions["resetResponse"]>) => {
      dispatch(FilterActions.resetResponse(...params));
    },
    []
  );

  return {
    ...state,
    dispatch,
    setForm,
    setFieldAnswer,
    setFieldError,
    reset,
  };
}

type FormContextType = ReturnType<typeof useCreateFormState>;

const FormContext = createContext<FormContextType>(
  {} as FormContextType
);

export function useCollectionForm() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useCollectionForm must be used within a FormProvider");
    }
    return context;
}

export type FormProviderProps = {
  scheme: FormPage;
  onResponseChange?: (response: ResponsePage) => void;
}

export const FormProvider = ({
  children,
  scheme,
  onResponseChange
}: PropsWithChildren<FormProviderProps>) => {
  const formState = useCreateFormState(scheme);

  useEffect(() => {
    if(onResponseChange) {
      onResponseChange(formState.response);
    }
  }, [formState.response, onResponseChange]);

  return (
    <FormContext.Provider value={formState}>
      {children}
    </FormContext.Provider>
  );
};
