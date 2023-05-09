import { useCallback } from "react";
import { FieldRendererProps } from ".";

export function NumberFieldRenderer(props: FieldRendererProps) {
  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      let value = ev.target.valueAsNumber;
      props.onChange(value);
    },
    [props]
  );

  return (
    <div className="w-full">
      <input
        type="number"
        value={props.response?.answer}
        onChange={onChange}
        placeholder={props.question.title}
        className="w-full rounded"
      />
    </div>
  );
}
