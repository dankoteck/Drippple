import { BsFilter } from "@react-icons/all-files/bs/BsFilter";
import AuthenticatedCategories from "~/components/AuthenticatedCategories";
import FilterView from "~/components/FilterView";
import LoadMore from "~/components/LoadMore";
import Projects from "~/components/Projects";
import { Button } from "~/components/ui/button";
import { getProjects } from "~/libs/actions";
import { AllProjects } from "~/types";
import { getAuthSession } from "~/utils/auth";

type SearchParams = {
  category?: string | null;
  endCursor?: string | null;
};

type Props = {
  searchParams: SearchParams;
};

export default async function Home({ searchParams }: Props) {
  const session = await getAuthSession();
  const items2 = (await getProjects(
    searchParams.category,
    searchParams.endCursor
  )) as AllProjects;
  const items: never[] = [];
  console.log({ items2 });

  return (
    <div className="px-10 py-8 mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-between gap-8 mb-8">
        <FilterView />
        {session?.user && <AuthenticatedCategories />}
        <Button variant="outline">
          <BsFilter className="w-6 h-6 mr-2" />
          Filters
        </Button>
      </div>

      {/* List Projects */}
      <Projects data={items} />

      <LoadMore
        session={session}
        endCursor={items2?.allProjects?.pageInfo?.endCursor}
      />
    </div>
  );
}
