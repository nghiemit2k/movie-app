

import Header from '../components/Header';
import FeatureMovie from '../components/FeatureMovies/index';
import MediaList from '../components/MediaList/index';
import { TRENDING_TABS, TOP_RATED_TABS } from '../libs/constants';
function HomePage() {
  return <div>
    <Header />
    <FeatureMovie />
    <MediaList title='Trending' tabs={TRENDING_TABS} />
    <MediaList title='Top Rated' tabs={TOP_RATED_TABS} />
  </div>

}

export default HomePage
