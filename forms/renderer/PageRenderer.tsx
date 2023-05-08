import { useCallback } from "react";
import { useCollectionForm } from "../state/context";
import { FieldWithMeta } from "./fields/FieldWithMeta";

export function PageRenderer() {
  const state = useCollectionForm();

  const onAnswerChange = useCallback(
    (questionId: string, answer: any) => {
      state.setFieldAnswer(questionId, answer);
    },
    [state]
  );

  return (
    <div className="flex w-full flex-col items-start justify-start">
      {state.form.title && (
        <div className="mt-2">
          <h1 className="text-lg">{state.form.title}</h1>
        </div>
      )}
      {state.form.description && (
        <div className="mt-2">
          <p className="text-sm opacity-70">{state.form.description}</p>
        </div>
      )}

      <div className="w-full gap-4">
        {state.form.fields.map((f) => {
          let answer = state.response.fieldAnswers.find(
            (r) => r.questionId === f.key
          );
          let fieldErrors = state.response.fieldErrors.find(
            (err) => err.questionId === f.key
          );

          return (
            <FieldWithMeta
              key={f.key}
              question={f}
              response={answer!}
              errors={fieldErrors ? fieldErrors : undefined}
              onChange={(ans) => onAnswerChange(f.key, ans)}
            />
          );
        })}
      </div>
    </div>
  );
}
