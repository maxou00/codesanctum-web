"use client";
/* eslint-disable @next/next/no-img-element */
import { useUser } from "@/state/user";

export default function AppDashboard() {
  const identity = useUser();
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
        <span className="opacity-40 text-sm">{identity.user!.email}</span>
      </div>
      </div>
    </div>
  );
}
