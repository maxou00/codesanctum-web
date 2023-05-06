import { useUser } from "@/state/user";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useMemo } from "react";

export default function Protected(props: PropsWithChildren<{}>) {
  const [loading, user, refresh] = useUser((s) => [
    s.isLoading,
    s.user,
    s.refresh,
  ]);
  const router = useRouter();

  const canPass = useMemo(() => {
    return !loading && user;
  }, [loading, user]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      router.replace("/signin");
    }
  }, [loading, user]);

  return <>
    {
        canPass && props.children
    }
  </>
}