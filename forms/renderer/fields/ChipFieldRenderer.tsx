import { useCallback } from "react";
import { FieldRendererProps } from ".";
import { ChipField } from "../../engine/fields";
import { X } from "phosphor-react";

export function ChipFieldRenderer(props: FieldRendererProps<ChipField>) {
  const onChipClicked = useCallback(
    (value: string) => {
      /// handle click by either adding the value to answers or removing it.
      if (props.question.selection === "single") {
        props.onChange(value);
      } else if (props.question.selection === "multiple") {
        let answer: Array<string> = props.response?.answer || [];
        if (!answer.includes(value)) {
          answer.push(value);
        }
        props.onChange(answer);
      }
    },
    [props]
  );

  const onChipUnselected = useCallback(
    (value: string) => {
      /// handle click by either adding the value to answers or removing it.
      if (props.question.selection === "single") {
        props.onChange(undefined);
      } else if (props.question.selection === "multiple") {
        let answer: Array<string> = props.response?.answer || [];
        if (answer.includes(value)) {
          answer = answer.filter((v) => v !== value);
        }
        props.onChange(answer);
      }
    },
    [props]
  );

  return (
    <div className="w-full py-1">
      {props.question.options.map((o) => {
        let isActive = false;
        if (props.response?.answer) {
          if (props.question.selection === "single") {
            isActive = props.response?.answer === o.value;
          } else {
            isActive = props.response?.answer.includes(o.value);
          }
        }

        return (
          <div
            className={`flex flex-row items-center justify-center gap-2 ${
              isActive ? "bg-primary text-white" : "bg-dark/60 text-white"
            } m-2`}
            key={o.key}
            onClick={() => onChipClicked(o.value)}
          >
            <span className="text-sm font-bold">
              {o.label || o.description || o.value}
            </span>
            <div
              onClick={isActive ? () => onChipUnselected(o.value) : undefined}
            >
              <X />
            </div>
          </div>
        );
      })}
    </div>
  );
}
