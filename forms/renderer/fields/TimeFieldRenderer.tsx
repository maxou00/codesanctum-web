import { ChangeEvent, useCallback } from "react";
import { FieldRendererProps } from ".";

export function TimeFieldRenderer(props: FieldRendererProps) {
  const onTimeChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let value = ev.target.value;
      props.onChange(value);
    },
    [props]
  );

  return (
    <div className="w-full">
      <input
        className="w-full rounded-md border py-1"
        type="time"
        value={props.response?.answer}
        placeholder={props.question.title}
        onChange={onTimeChange}
      />
    </div>
  );
}
