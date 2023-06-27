import { Session, getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export async function getAuthSession(): Promise<Session | null> {
  return await getServerSession(authOptions);
}
