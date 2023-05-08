import { initialParagraph, initialShortText } from "../engine/creators";
import { FormPage } from "../engine/page";

export function JoinRequest() {
    return [
        initialShortText({
            key: "firstname",
            title: "Firstname",
            required: false,
        }),
        initialShortText({
            key: "lastname",
            title: "Lastname",
            required: false,
        }),
        initialShortText({
            key: "linkedin",
            title: "Your LinkedIn Profile Link",
            required: false,
        }),
        initialShortText({
            key: "github",
            title: "Your Github Profile Link",
            required: false,
        }),
        initialShortText({
            key: "portfolio",
            title: "Your Portfolio Link",
            required: false,
        }),
        initialParagraph({
            key: "whyJoiningUs",
            title: "What are your motivations for joining the CodeSanctum cohort ?",
            required: true
        }),
        initialParagraph({
            key: "previousLanguages",
            title: "What programming languages have you used before?",
            required: false
        }),
        initialParagraph({
            key: "previousProjects",
            title: "Have you ever worked on programming projects? If so, please describe them briefly.",
            required: false
        }),
        initialParagraph({
            key: "availableTime",
            title: "How much time are you willing to spend each week on CodeSanctum training and projects?",
            required: false
        }),
        initialParagraph({
            key: "expectedResources",
            title: "What types of activities, support or resources do you hope to find within the cohort",
            required: false
        }),
        initialParagraph({
            key: "anyAdditionalQuestions",
            title: "Do you have any additional questions, comments or concerns you would like to share?",
            required: false
        })
    ]
}

export const JoinRequestForm: FormPage = {
    key: "joinRequestForm",
    title: "Tell us more about you",
    description: "We would like to know you more to personalize your experience",
    fields: JoinRequest()
}