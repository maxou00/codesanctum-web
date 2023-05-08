import { Box, Input } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { FieldRendererProps } from ".";
import { DateField, DateTimeField } from "../../engine/fields";

export function DateFieldRenderer(
  props: FieldRendererProps<DateField | DateTimeField>
) {
  const value = useMemo(() => {
    if (props.response?.answer) {
      return new Intl.DateTimeFormat("en-CA").format(
        Date.parse(props.response.answer)
      );
    }
  }, [props.response]);

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      let value = ev.target.valueAsDate?.toISOString();
      props.onChange(value);
    },
    [props]
  );

  return (
    <div className="w-full">
      <input
        type={props.question.format === "datetime" ? "datetime-local" : "date"}
        className="h-56 w-full rounded"
        value={value}
        onChange={onChange}
        placeholder={props.question.title}
      />
    </div>
  );
}
