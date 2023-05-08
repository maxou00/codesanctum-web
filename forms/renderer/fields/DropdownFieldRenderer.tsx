import { Box, Select } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { FieldRendererProps } from ".";

export function DropdownFieldRenderer(props: FieldRendererProps) {

    const answer = useMemo(() => {
        if (props.response?.answer) {
            return props.response.answer;
        }
        return "";
    }, [props.response]);

    const onSelect = useCallback((value: string) => {
        props.onChange(value);
    }, [props]);

    return <div className="w-full py-1">
        <select
            value={answer}
            className="h-56 w-full rounded"
            placeholder={props.question.title}
            onChange={(ev) => onSelect(ev.target.value)}>
            {
                props.question.options.map((o: any) => {
                    return <option key={o.key} value={o.value}>{o.label || o.description || o.value}</option>
                })
            }
        </select>
    </div>
}