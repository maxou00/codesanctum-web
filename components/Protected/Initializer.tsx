import { useUser } from "@/state/user";
import { PropsWithChildren, useEffect } from "react";

export default function Initializer(props: PropsWithChildren<{}>) {
  const [loading, user, refresh] = useUser((s) => [
    s.isLoading,
    s.user,
    s.refresh,
  ]);

  useEffect(() => {
    refresh();
  }, []);

  return <div className="w-full">{props.children}</div>;
}
