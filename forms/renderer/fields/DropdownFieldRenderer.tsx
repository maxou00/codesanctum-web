import { useCallback, useMemo } from "react";
import { FieldRendererProps } from ".";

export function DropdownFieldRenderer(props: FieldRendererProps) {
  const answer = useMemo(() => {
    if (props.response?.answer) {
      return props.response.answer;
    }
    return "";
  }, [props.response]);

  const onSelect = useCallback(
    (value: string) => {
      props.onChange(value);
    },
    [props]
  );

  return (
    <div className="w-full">
      <select
        value={answer}
        className="w-full rounded-md px-4 py-2"
        placeholder={props.question.title}
        onChange={(ev) => onSelect(ev.target.value)}
      >
        {props.question.options.map((o: any) => {
          return (
            <option key={o.key} value={o.value}>
              {o.label || o.description || o.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
