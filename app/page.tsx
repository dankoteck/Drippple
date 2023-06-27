import FilterView from "~/components/FilterView";
import { Button } from "~/components/ui/button";
import { getAuthSession } from "~/utils/auth";
import { BsFilter } from "@react-icons/all-files/bs/BsFilter";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <div className="px-10 mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-between py-8">
        <FilterView />
        <Button variant="outline">
          <BsFilter className="w-6 h-6 mr-2" />
          Filters
        </Button>
      </div>

      {/* List Projects */}
    </div>
  );
}
