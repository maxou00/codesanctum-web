import { FormPage, ResponsePage } from "@themx05/csforms/lib/engine";
import { FormAction } from "./actions";

function setFormPage(form: FormPage): FormAction {
    return {
        type: "SET_FORM_PAGE",
        form
    }
}

function initResponse(responsePage: ResponsePage): FormAction {
    return {
        type: "INIT_RESPONSE",
        response: responsePage
    }
}

function appendAnswer(questionId: string, answer: any): FormAction {
    return {
        type: 'APPEND_ANSWER',
        questionId,
        answer
    }
}

function appendAnswerError(questionId: string, error: any): FormAction {
    return {
        type: 'APPEND_ANSWER_ERROR',
        questionId,
        error
    }
}

function resetResponse(): FormAction {
    return {
        type: 'RESET_RESPONSE'
    }
}

export const FilterActions = {
    setFormPage,
    initResponse,
    appendAnswer,
    appendAnswerError,
    resetResponse
}