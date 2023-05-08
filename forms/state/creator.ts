import { FormPage } from "../engine/page";
import { FilterFormAction } from "./actions";

function setFormPage(form: FormPage): FilterFormAction {
    return {
        type: "SET_FORM_PAGE",
        form
    }
}

function appendAnswer(questionId: string, answer: any): FilterFormAction {
    return {
        type: 'APPEND_ANSWER',
        questionId,
        answer
    }
}

function appendAnswerError(questionId: string, error: any): FilterFormAction {
    return {
        type: 'APPEND_ANSWER_ERROR',
        questionId,
        error
    }
}

function resetResponse(): FilterFormAction {
    return {
        type: 'RESET_RESPONSE'
    }
}

export const FilterActions = {
    setFormPage,
    appendAnswer,
    appendAnswerError,
    resetResponse
}