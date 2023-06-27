import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { getAuthSession } from "./utils/auth";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}
