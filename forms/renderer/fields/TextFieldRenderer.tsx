import { Box, Input, Textarea } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useMemo } from "react";
import { FieldRendererProps } from ".";

export function TextFieldRenderer(props: FieldRendererProps) {
  const fieldType = useMemo(() => {
    if (props.question.format === "email") {
      return "email";
    }
    return "text";
  }, [props.question]);

  const isMultiline = useMemo(() => {
    return ["paragraph", "rich"].includes(props.question.format);
  }, [props.question]);

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = ev.target.value;
      props.onChange(value);
    },
    [props]
  );

  return (
    <div className="p-1">
      {isMultiline ? (
        <textarea
          value={props.response?.answer || ""}
          rows={props.question.rows || 6}
          placeholder={props.question.title}
          onChange={onChange}
          className="border-1 w-full rounded border"
        ></textarea>
      ) : (
        <input
          className="border-1 w-full rounded border"
          type={fieldType}
          value={props.response?.answer || ""}
          placeholder={props.question.title}
          onChange={onChange}
        />
      )}
    </div>
  );
}
