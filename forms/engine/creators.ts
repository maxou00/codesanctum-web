import { nanoid } from "nanoid";
import { CheckboxField, ChipField, CommonFieldProps, ContentField, DateField, DateTimeField, DecorableOption, DropdownField, EmailField, FieldType, FileField, NumberField, ParagraphField, RadioField, RichTextField, SingleLineField, TimeField } from "./fields";

export function commonField(type: FieldType): CommonFieldProps {
    return {
        key: nanoid(),
        type,
        title: "",
        description: "",
        required: true,
    }
}

export function initialShortText(overrides: Partial<SingleLineField> | undefined = undefined): SingleLineField {
    return {
        ...commonField("text"),
        format: "short",
        max: 255,
        ...overrides,
    } as SingleLineField;
}

export function initialRichText(overrides: Partial<RichTextField> | undefined = undefined): RichTextField {
    return  {
        ...commonField("text"),
        format: "rich",
        ...overrides
    } as RichTextField
}

export function initialParagraph(overrides: Partial<ParagraphField> | undefined = undefined): ParagraphField {
    return {
        ...commonField("text"),
        format: "paragraph",
        ...overrides
    } as ParagraphField
}

export function initialEmail(overrides: Partial<EmailField> | undefined = undefined): EmailField {
    return {
        ...commonField("text"),
        format: "email",
        ...overrides,
    } as EmailField
}

export function initialNumber(overrides: Partial<NumberField> | undefined = undefined): NumberField {
    return {
        ...commonField("number"),
        ...overrides
    } as NumberField
}

export function initialDate(overrides: Partial<DateField> | undefined = undefined): DateField {
    return {
        ...commonField("number"),
        format: "date",
        ...overrides
    } as DateField
}

export function initialTime(overrides: Partial<TimeField> | undefined = undefined): TimeField {
    return {
        ...commonField("number"),
        format: "time",
        ...overrides,
    } as TimeField
}

export function initialDateTime(overrides: Partial<DateTimeField> | undefined = undefined): DateTimeField {
    return {
        ...commonField("number"),
        format: "datetime",
        ...overrides,
    } as DateTimeField
}

export function initialOption(overrides: Partial<DecorableOption> | undefined = undefined): DecorableOption {
    return {
        key: nanoid(),
        value: 'option',
        description: "",
        ...overrides
    }
}

export function initialDropdownField(overrides: Partial<DropdownField> | undefined = undefined): DropdownField {
    return {
        ...commonField("selection"),
        format: "dropdown",
        allowCustomValue: false, 
        options: [initialOption()],
        selection: "single",
        ...overrides
    } as DropdownField
}

export function initialRadioField(overrides: Partial<RadioField> | undefined = undefined): RadioField {
    return {
        ...commonField("selection"),
        format: "radio",
        allowCustomValue: false, 
        options: [initialOption()],
        selection: "single",
        ...overrides
    } as RadioField
}

export function initialCheckboxField(overrides: Partial<CheckboxField> | undefined = undefined): CheckboxField {
    return {
        ...commonField("selection"),
        format: "checkbox",
        allowCustomValue: false, 
        options: [initialOption()],
        selection: "multiple",
        ...overrides
    } as CheckboxField
}

export function initialChipField(overrides: Partial<ChipField> | undefined = undefined): ChipField {
    return {
        ...commonField("selection"),
        format: "chip",
        allowCustomValue: false, 
        options: [initialOption()],
        selection: "single",
        ...overrides
    } as ChipField
}

export function initialFileField(overrides: Partial<FileField> | undefined = undefined): FileField {
    return {
        ...commonField("file"),
        maxSize: 5,
        formats: [],
        maxCount: 1,
        ...overrides
    } as FileField
}

export const FieldCreators = {
    text_short: initialShortText,
    text_rich: initialRichText,
    text_paragraph: initialParagraph,
    text_email: initialEmail,
    number: initialNumber,
    number_date: initialDate,
    number_time: initialTime,
    number_datetime: initialDateTime,
    selection_dropdown: initialDropdownField,
    selection_radio: initialRadioField,
    selection_checkbox: initialCheckboxField,
    selection_chip: initialChipField,
    file: initialFileField,
}

export function fieldCode(field: ContentField, idOverride: string | undefined = undefined) {
    return idOverride ? idOverride : `field_${field.type}${field.format ? "_"+field.format : ""}`
}