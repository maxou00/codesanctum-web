import { useCallback } from "react";
import { FieldRendererProps } from ".";

export function RadioFieldRenderer(props: FieldRendererProps) {
  const onCheckChange = useCallback(
    (value: string) => {
      props.onChange(value);
    },
    [props]
  );

  return (
    <div className="w-full py-1">
      <div className="flex flex-col items-center justify-start">
        {props.question.options.map((o: any) => {
          return (
            <div
              key={o.key}
              className="flex flex-col items-center justify-start"
            >
              <input
                value={o.value}
                name={props.question.id}
                type="radio"
                checked={
                  (props.response?.answer || props.question?.defaultValue) ===
                  o.value
                }
                onChange={(ev) => onCheckChange(ev.target.value)}
              />

              <p>{o.label || o.description || o.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
