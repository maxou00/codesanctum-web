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
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <div className="items-start-justify-start flex w-full flex-col gap-2">
        {state.form.title && (
          <div>
            <h1
              className="text-2xl"
              dangerouslySetInnerHTML={{
                __html: state.form.title.replaceAll("\n", "<br/>"),
              }}
            ></h1>
          </div>
        )}
        {state.form.description && (
          <div>
            <p
              className="text-md opacity-60"
              dangerouslySetInnerHTML={{
                __html: state.form.description.replaceAll("\n", "<br/>"),
              }}
            ></p>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-4">
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
