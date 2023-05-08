import { FilterFormState } from "..";
import { initialPage } from "../../engine/page";
import { FilterFormAction } from "../actions";
import produce from "immer"

export const initialFilterFormState: FilterFormState = {
    form: initialPage(),
    response: {
        fieldAnswers: [],
        fieldErrors: []
    },
};

export function reduceFilterFormState(state: FilterFormState = initialFilterFormState, action: FilterFormAction): FilterFormState {
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