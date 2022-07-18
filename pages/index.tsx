import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {

  // With input
  const helloApi = trpc.useQuery(['hello', { text: 'client' }]);

  // With out inputs
  const byeApi = trpc.useQuery(['bye']);

  if (!helloApi.data) {
    return <h1>Loading..</h1>
  }

  if (!byeApi.data) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      { helloApi.data.greeting }
      Here ByeAPI:
      { byeApi.data.greeting }
    </div>
  )
}

export default Home