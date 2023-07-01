import { Session, getServerSession } from "next-auth";
import { authOptions } from "../libs/auth";

export async function getAuthSession(): Promise<Session | null> {
  return await getServerSession(authOptions);
}
