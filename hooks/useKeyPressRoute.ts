import { useRouter } from "next/router";
import { useCallback } from "react";
import type { KeyboardEvent } from "react";

export default function useKeyPressRoute() {
  const { push } = useRouter();

  return useCallback(
    (e: KeyboardEvent<HTMLElement>, route: string) => (e.key === "Enter" || e.key === "Space") && push(`/${route}`),
    [push]
  );
}
