import { useEffect } from "react";
import { FieldRendererProps } from ".";
import { FieldRenderer } from "../FieldRenderer";

export function FieldWithMeta(props: FieldRendererProps) {
  /// auto inject default value
  useEffect(() => {
    if (!props.response?.answer && props.question.defaultValue) {
      props.onChange(props.question.defaultValue);
    }
  }, [props]);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-1">
      <div className="w-full">
        <h6 className="text-md max-w-[60ch] font-light dark:text-white">
          {props.question.title}
          {props.question.required && <span className="text-red-400">*</span>}
        </h6>
        {props.question.description && (
          <p className="text-sm dark:text-white">
            {props.question.description}
          </p>
        )}
      </div>
      <div className="w-full">
        <FieldRenderer {...props} />
      </div>
      {props.errors && (
        <div className="w-full">
          <p className="text-red-400">{props.errors}</p>
        </div>
      )}
    </div>
  );
}
