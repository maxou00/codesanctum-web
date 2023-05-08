/* eslint-disable react/no-unescaped-entities */
"use client";
import JoinCohortRequest from "@/components/JoinCohortRequest";
import { JOIN_REQUEST_FORM_ID } from "@/core";
import {
  CreateAnswerMutation,
  CreateAnswerMutationVariables,
  FormAnswerQuery,
  FormAnswerQueryVariables,
} from "@/core/gql/graphql";
import { MUTATION_CREATE_ANSWER } from "@/core/mutations";
import { GET_FORM_ANSWER } from "@/core/queries";
import useFormByID from "@/hooks/useFormByID";
import { useJoinRequest } from "@/state/useJoinRequest";
import { useIdentity } from "@/state/user";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function AppDashboard() {
  const identity = useIdentity();
  const joinRequest = useJoinRequest();

  return (
    <div className="flex w-full flex-col items-center justify-start">
      <div className="w-[640px] max-md:w-full">
        {!joinRequest.isLoading &&
          joinRequest.form?.answer &&
          !identity.user.approved && (
            <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 dark:text-white">
              <h4 className="text-center font-heading text-3xl">
                Hey there, we're reviewing your profile!
              </h4>
              <p className="opacity-50">
                Hey, thanks for submitting your profile! <br />
                <br /> We're super excited to get to know you better and learn
                about your coding skills. Just give us a little time to review
                everything and see if you're the perfect fit for our cohort.
                <br />
                <br />
                Guardians are carefully going through your profile. We can't
                wait to see your motivations, goals, and programming experience.
                Don't worry, we won't take too long, but we want to make sure we
                make the right choice for this incredible journey!
                <br />
                <br />
                So hang tight, stick around, and get ready to hear from us soon.
                In the meantime, keep preparing yourself for this exciting
                adventure, knowing that The Sanctuary is getting a seat ready
                for you.
                <br />
                <br />
                See you around!
              </p>
            </div>
          )}
      </div>
      {!joinRequest.isLoading && !joinRequest.form?.answer && (
        <div className="w-[640px] rounded-md bg-dark p-8 max-md:w-full">
          <JoinCohortRequest />
        </div>
      )}
    </div>
  );
}
