import { FormPage, ResponsePage } from "../engine/page";

interface SetFormPage {
    type: 'SET_FORM_PAGE',
    form: FormPage;
}

interface InitReponse {
    type: "INIT_RESPONSE",
    response: ResponsePage;
}

interface AppendAnswer {
    type: 'APPEND_ANSWER';
    questionId: string;
    answer: any;
}

interface AppendAnswerError { 
    type: 'APPEND_ANSWER_ERROR';
    questionId: string;
    error: any;
}

interface ResetResponse {
    type: 'RESET_RESPONSE'
}

export type FormAction = SetFormPage | InitReponse | AppendAnswer | AppendAnswerError | ResetResponse;