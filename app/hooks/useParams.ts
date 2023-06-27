import { useSearchParams } from "next/navigation";

export function useParams(key: string) {
  const params = useSearchParams();
  const currentParam = params.get(key);

  return currentParam;
}
