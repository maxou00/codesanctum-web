import { useJoinRequest } from "@/state/useJoinRequest";
import { useIdentity } from "@/state/user";
import { PropsWithChildren, useEffect } from "react";

export default function Initializer(props: PropsWithChildren<{}>) {
  const [loading, user, refresh] = useIdentity((s) => [
    s.isLoading,
    s.user,
    s.refresh,
  ]);

  const joinRequest = useJoinRequest();

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (user?.id) {
      joinRequest.load();
    }
  }, [user?.id]);

  return <div className="w-full">{props.children}</div>;
}
