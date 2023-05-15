import CsForms from "@themx05/csforms";

export interface FieldRendererProps<T = CsForms.Engine.FormField> {
    question: T;
    response: {questionId: string, answer: any};
    errors: any;
    onChange(answer: any): any;
}