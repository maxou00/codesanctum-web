import CsForms from"@themx05/csforms";

interface SetFormPage {
    type: 'SET_FORM_PAGE',
    form: CsForms.Engine.FormPage;
}

interface InitReponse {
    type: "INIT_RESPONSE",
    response: CsForms.Engine.ResponsePage;
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