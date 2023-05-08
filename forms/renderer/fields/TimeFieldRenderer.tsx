import { Box, Input } from "@chakra-ui/react";
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
    <div className="w-full py-1">
      <input
        className="border-1 w-full rounded border py-1"
        type="time"
        value={props.response?.answer}
        placeholder={props.question.title}
        onChange={onTimeChange}
      />
    </div>
  );
}
