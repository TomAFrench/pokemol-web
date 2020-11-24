import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/core';

import { useDao } from '../../contexts/PokemolContext';
import GraphFetch from '../Shared/GraphFetch';
import { DAO_ACTIVITIES } from '../../utils/apollo/dao-queries';
import { activitiesData } from '../../content/skeleton-data';
import DaoActivityCard from '../Activities/DaoActivityCard';
import { getProfileActivites } from '../../utils/activities-helpers';
import Paginator from '../Shared/Paginator';

const ProfileActvityFeed = ({ profileAddress }) => {
  const [dao] = useDao();
  const [fetchedData, setFetchedData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activities, setActivities] = useState(activitiesData);
  const [allActivities, setAllActivities] = useState();

  useEffect(() => {
    if (fetchedData) {
      const hydratedActivites = getProfileActivites(
        fetchedData,
        profileAddress,
      );
      setAllActivities(hydratedActivites);
      setIsLoaded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData]);

  return (
    <>
      <Box mt={6} textTransform='uppercase' fontSize='sm' fontFamily='heading'>
        Recent Activity
      </Box>

      {activities.map((activity) => (
        <DaoActivityCard
          activity={activity}
          key={activity.id}
          isLoaded={isLoaded}
        />
      ))}

      {isLoaded ? (
        <Paginator
          perPage={5}
          setRecords={setActivities}
          allRecords={allActivities}
        />
      ) : null}

      {dao ? (
        <GraphFetch
          query={DAO_ACTIVITIES}
          setRecords={setFetchedData}
          entity='moloch'
          variables={{ contractAddr: dao.address }}
          context={{ currentPeriod: dao.currentPeriod }}
        />
      ) : null}
    </>
  );
};

export default ProfileActvityFeed;