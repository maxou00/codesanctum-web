import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { FieldRendererProps } from ".";
import { FieldRenderer } from "../FieldRenderer";

export function FieldWithMeta(props: FieldRendererProps) {

  /// auto inject default value
  useEffect(() => {
    if(!props.response?.answer && props.question.defaultValue) {
      props.onChange(props.question.defaultValue);
    }
  }, [props]);

  return (
    <div className="w-full" key={props.question.key}>
      <div className="w-full py-1">
        <h6 className="text-sm font-bold">
          {props.question.title}
          {props.question.required ? "*" : ""}
        </h6>
        {props.question.description && (
          <p className="text-sm">
            {props.question.description}
          </p>
        )}
      </div>
      <FieldRenderer {...props} />
      {props.errors && (
        <div className="m-2">
          <Text color="red.400">{props.errors}</Text>
        </div>
      )}
    </div>
  );
}
