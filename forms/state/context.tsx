import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useReducer } from "react";
import {
  FilterActions,
} from "./creator";
import {
  initialFormState,
  reduceFormState,
} from "./reducers/collection";
import CsForms from "@themx05/csforms";

function useCreateFormState(scheme: CsForms.Engine.FormPage, initialResponse: CsForms.Engine.ResponsePage | undefined = undefined) {
  const [state, dispatch] = useReducer(
    reduceFormState,
    {
      ...initialFormState,
      form: scheme || initialFormState.form
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

  useEffect(() => {
    if(initialResponse) {
      dispatch(FilterActions.initResponse(initialResponse));
    }
  }, []);

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
  scheme: CsForms.Engine.FormPage;
  defaultResponse?: CsForms.Engine.ResponsePage;
  onResponseChange?: (response: CsForms.Engine.ResponsePage) => void;
}

export const FormProvider = ({
  children,
  scheme,
  onResponseChange,
  defaultResponse
}: PropsWithChildren<FormProviderProps>) => {
  const formState = useCreateFormState(scheme, defaultResponse);

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
