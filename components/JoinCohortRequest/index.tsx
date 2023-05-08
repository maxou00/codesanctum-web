/* eslint-disable react/no-unescaped-entities */
import {
  CreateAnswerMutation,
  CreateAnswerMutationVariables,
} from "@/core/gql/graphql";
import { MUTATION_CREATE_ANSWER } from "@/core/mutations";
import { ResponsePage } from "@/forms/engine/page";
import { FormRenderer } from "@/forms/renderer/FormRenderer";
import { FormProvider } from "@/forms/state/context";
import { useIdentity } from "@/state/user";
import { useMutation } from "@apollo/client";
import { Check } from "phosphor-react";
import { useCallback, useId, useState } from "react";
import Modal from "../Modals/base";
import { Blocks } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { useJoinRequest } from "@/state/useJoinRequest";

export default function JoinCohortRequest() {
  const identity = useIdentity();
  const joinFormState = useJoinRequest();

  const [joinRequestResponse, setJoinRequestResponse] = useState<ResponsePage>({
    fieldAnswers: [
      { questionId: "email", answer: identity.user?.email || "" },
      { questionId: "firstname", answer: identity.user?.firstname || "" },
      { questionId: "lastname", answer: identity.user?.lastname || "" },
    ],
    fieldErrors: [],
  });

  const [submit, joinRequest] = useMutation<
    CreateAnswerMutation,
    CreateAnswerMutationVariables
  >(MUTATION_CREATE_ANSWER);

  const [success, setSuccess] = useState(false);
  const toastId = useId();

  const onSubmit = useCallback(() => {
    if (
      joinRequestResponse.fieldAnswers &&
      joinRequestResponse.fieldErrors.length === 0
    ) {
      submit({
        variables: {
          data: {
            data: joinRequestResponse,
            user: {
              connect: {
                id: identity.user.id,
              },
            },
            form: {
              connect: {
                id: joinFormState.form?.id,
              },
            },
          },
        },
      }).then(async (res) => {
        if (res.data.createAnswer?.id) {
          setSuccess(true);
          await joinFormState.load();
        } else {
          toast.error("Failed to send your answer", { id: toastId });
        }
      });
    }
  }, [identity.user.id, joinFormState, joinRequestResponse, submit, toastId]);

  return (
    <div className="w-full">
      {joinFormState.form?.data && (
        <>
          <FormProvider
            onResponseChange={(r) => setJoinRequestResponse(r)}
            scheme={joinFormState.form?.data}
            defaultResponse={joinRequestResponse}
          >
            <FormRenderer />
            <div className="flex w-full flex-row pt-4">
              <button
                onClick={onSubmit}
                className="mt-4 flex flex-row items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-yellow"
              >
                <span>Submit your answer</span>
                <Check fontSize="24px" />
              </button>
            </div>
          </FormProvider>
        </>
      )}

      <Modal
        isOpen={joinRequest.loading}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
          <h1 className="max-w-[30ch] text-center text-xl">
            Please wait while your answer is been sent
          </h1>
        </div>
      </Modal>
      <Modal
        isOpen={!joinRequest.loading && success}
        onRequestClose={() => setSuccess(false)}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <h1 className="text-center text-2xl">
            We've got
            <br />
            your answer !
          </h1>
          <p className="text-md opacity-80">
            We will get back to you as soon as we analyze your profile.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="rounded bg-primary px-4 py-2 text-sm"
          >
            Ok, got it
          </button>
        </div>
      </Modal>
    </div>
  );
}
