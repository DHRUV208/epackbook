import * as React from 'react';

import GenericMediaCard from '../../../../../common-components/page-elements/genericMediaCard';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import { Paper, Grid, useTheme } from '@mui/material';
import GenericRadarChart from '../../../../../common-components/page-elements/charts/genericRadarChart';
import GenericPieChart from '../../../../../common-components/page-elements/charts/genericPieChart';
import { chartColors } from '../../../../../common-components/page-elements/charts/constants';
import GenericBarChart from '../../../../../common-components/page-elements/charts/genericBarChart';
import GenericLineAreaChart from '../../../../../common-components/page-elements/charts/genericLineAreaChart';
const Index = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ padding: '30px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <GenericMediaCard
                sx={{ color: theme.palette.primary.dark }}
                text="My Total New Enquiries"
                icon={<QuestionMarkIcon sx={{ height: '3rem', width: '3rem' }} />}
                heading={'New Enquiries'}
                value={'0'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <GenericMediaCard
                sx={{ background: 'linear-gradient(60deg,#000080,#7d7de7)' }}
                text="My Total Follow Ups epackbook"
                icon={<BookmarkIcon sx={{ height: '3rem', width: '3rem' }} />}
                heading={'Follow Ups Today'}
                value={'0'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <GenericMediaCard
                sx={{ background: 'linear-gradient(60deg,  #708090,#6ab1f1)' }}
                text="My Total Today Surveys"
                icon={<FeaturedPlayListIcon sx={{ height: '3rem', width: '3rem' }} />}
                heading={'Today Surveys'}
                value={'0'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <GenericMediaCard
                sx={{ background: 'linear-gradient(60deg, #FFA500, #ffdea3)' }}
                text="My Total In Progress Enquiries"
                icon={<QueryStatsIcon sx={{ height: '3rem', width: '3rem' }} />}
                heading={'In Progress Enquiries'}
                value={'0'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <GenericMediaCard
                sx={{ background: 'linear-gradient(60deg, #333333, #aca9a9)' }}
                text="My Total New Shifting epackbook"
                icon={<LocalShippingIcon sx={{ height: '3rem', width: '3rem' }} />}
                heading={'New Shifting'}
                value={'0'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <GenericMediaCard
                sx={{ background: 'linear-gradient(60deg, #800000, #f1a9a9)' }}
                text="My Total Delivered Orders"
                icon={<WhereToVoteIcon sx={{ height: '3rem', width: '3rem' }} />}
                heading={'Delivered Orders'}
                value={'0'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <GenericRadarChart
                dataSeries={[
                  {
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20]
                  },
                  {
                    name: 'Series 2',
                    data: [20, 30, 40, 80, 20, 80]
                  },
                  {
                    name: 'Series 3',
                    data: [44, 76, 78, 13, 43, 10]
                  }
                ]}
                chartTitle={'Demo Radar Chart'}
                dataCategories={['2011', '2012', '2013', '2014', '2015', '2016']}
                options={{ colors: chartColors }}
                height={350}
                width={350}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericPieChart
                dataSeries={[44, 55, 13, 33]}
                height={450}
                width={450}
                options={{ colors: chartColors }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericBarChart
                dataSeries={[
                  {
                    data: [44, 55, 41, 64, 22, 43, 21]
                  },
                  {
                    data: [53, 32, 33, 52, 13, 44, 32]
                  }
                ]}
                options={{ colors: chartColors }}
                xaxis={[2001, 2002, 2003, 2004, 2005, 2006, 2007]}
                height={450}
                width={450}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericLineAreaChart
                dataSeries={[
                  {
                    name: 'series-1',
                    data: [30, 40, 25, 50, 49, 21, 70, 51]
                  },
                  {
                    name: 'series-2',
                    data: [23, 12, 54, 61, 32, 56, 81, 19]
                  },
                  {
                    name: 'series-3',
                    data: [24, 20, 5, 75, 42, 79, 72, 35]
                  }
                ]}
                options={{
                  xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  },
                  colors: chartColors
                }}
                height={450}
                width={450}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Index;
