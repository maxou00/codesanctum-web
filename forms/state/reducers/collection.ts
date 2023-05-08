import { FormState } from "..";
import { initialPage } from "../../engine/page";
import { FormAction } from "../actions";
import produce from "immer"

export const initialFormState: FormState = {
    form: initialPage(),
    response: {
        fieldAnswers: [],
        fieldErrors: []
    },
};

export function reduceFormState(state: FormState = initialFormState, action: FormAction): FormState {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'SET_FORM_PAGE': {
                draft.form = action.form;
                draft.response = {
                    fieldAnswers: action.form.fields.map((f) => {
                        return {
                            questionId: f.key,
                            answer: undefined
                        }
                    }),
    
                    fieldErrors: action.form.fields.map((f) => {
                        return {
                            questionId: f.key,
                            error: undefined
                        }
                    })
                }
                return draft;
            }
            case "INIT_RESPONSE": {
                let answers = [...action.response.fieldAnswers];
                draft.response.fieldAnswers.forEach((f) => {
                    let exists = answers.find((f2) => f2.questionId === f.questionId);
                    if(!exists) {
                        answers.push(f);
                    }
                }),
                draft.response.fieldAnswers =  answers;
                return draft;
            }
            /////ONGOING
            case 'RESET_RESPONSE': {

                draft.response = {
                    fieldAnswers: draft.form.fields.map((f) => {
                        return {
                            questionId: f.key,
                            answer: undefined
                        }
                    }),
    
                    fieldErrors: draft.form.fields.map((f) => {
                        return {
                            questionId: f.key,
                            error: undefined
                        }
                    })
                }
                return draft;
            }
            case 'APPEND_ANSWER': {
                let questionIndex = draft.response.fieldAnswers.findIndex((a) => a.questionId === action.questionId);
                if (questionIndex > -1) {
                    draft.response.fieldAnswers[questionIndex].answer = action.answer;
                }
                else {
                    draft.response.fieldAnswers.push({ answer: action.answer, questionId: action.questionId });
                }
                return draft;
            }
            case 'APPEND_ANSWER_ERROR': {
                let questionIndex = draft.response.fieldErrors.findIndex((a) => a.questionId === action.questionId);
                if (questionIndex > -1) {
                    draft.response.fieldErrors[questionIndex].error = action.error;
                }
                else {
                    draft.response.fieldErrors.push({ error: action.error, questionId: action.questionId });
                }
                return draft;
            }
            
            default: 
                return draft;
        } 
    });
}