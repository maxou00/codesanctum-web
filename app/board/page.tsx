"use client";
/* eslint-disable @next/next/no-img-element */
import { JoinRequestForm } from "@/forms/presets/joinrequest";
import { FormRenderer } from "@/forms/renderer/FormRenderer";
import { FormProvider } from "@/forms/state/context";
import { useIdentity } from "@/state/user";

export default function AppDashboard() {
  const identity = useIdentity();
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="flex flex-row items-center justify-start gap-4">
        <img
          src={identity.user!.avatar}
          alt=""
          className="h-24 w-24 rounded-full"
        />
        <div className="flex flex-col items-start justify-start gap-0 dark:text-white">
          <span>
            {identity.user!.firstname} {identity.user!.lastname}
          </span>
          <span className="text-sm opacity-40">{identity.user!.email}</span>
        </div>
      </div>
      <FormProvider scheme={JoinRequestForm}>
        <FormRenderer />
      </FormProvider>
    </div>
  );
}
