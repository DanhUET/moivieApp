import FeatureMovie from "../components/FeatureMovie";
import MediaList from "../components/MediaList";
import { TABS_TopRated, TABS_Trending } from "../libs/constants";
function Home() {
  return (
    <>
      <FeatureMovie />
      <MediaList title="Trending" tabs={TABS_Trending} status="trendingTab" />
      <MediaList title="Top Rated" tabs={TABS_TopRated} status="topRatedTab" />
    </>
  );
}
export default Home;
