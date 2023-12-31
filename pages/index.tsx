import type { NextPage } from 'next'
import axios from 'axios';

import { BASE_URL } from '../utils';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';

interface IProps {
  videos: Video[];
}

const Home = ({videos}: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
  );
};      

export default Home

export const getServerSideProps = async () => {
  const {data} = await axios.get(`${BASE_URL}/api/post`);

  return {
    props: {
      videos: data
    }
  }
};
