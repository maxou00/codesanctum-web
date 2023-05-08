import { useMemo } from "react";
import { useCallback } from "react";
import { FieldRendererProps } from ".";

export function CheckboxFieldRenderer(props: FieldRendererProps) {
  const answers = useMemo(() => {
    if (props.response?.answer) {
      return props.response.answer;
    }
    return [];
  }, [props.response]);

  const onCheckChange = useCallback(
    (value: string, check: boolean) => {
      let answerIndex = answers.findIndex((a: string) => a === value);
      let cpy = [...answers];

      if (check && answerIndex === -1) {
        cpy.push(value);
      } else if (!check && answerIndex > -1) {
        cpy.splice(answerIndex, 1);
      }
      props.onChange(cpy);
    },
    [props, answers]
  );

  return (
    <div className="flex w-full flex-col">
      {props.question.options.map((o: any) => {
        let isActive = answers.includes(o.value);

        return (
          <input
            type="checkbox"
            key={o.key}
            value={isActive}
            checked={isActive}
            onChange={(ev) => onCheckChange(o.value, ev.currentTarget.checked)}
          >
            {o.label || o.description || o.value}
          </input>
        );
      })}
    </div>
  );
}
