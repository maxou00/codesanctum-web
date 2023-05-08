import { nanoid } from "nanoid";
import { ContentField } from "./fields";


interface FormStyles {
    theme: "dark" | "light";
}

export interface FormPage {
    key: string;
    title: string;
    description: string;
    fields: ContentField[];
    styles?: FormStyles;
}

export function initialPage(overrides: Partial<FormPage> = {}): FormPage {
    return {
        key: nanoid(),
        title: "New Page",
        description: "",
        fields: [],
        ...overrides
    }
}

export interface ResponsePage {
    fieldAnswers: FieldResponse[];
    fieldErrors: FieldError[];
}

export interface FieldResponse {
    questionId: string;
    answer: any;
}

export interface FieldError {
    questionId: string;
    error: any;
}