import { useState, useEffect } from 'react';
import logo from './assets/spacex.png';
import { Heading, Image} from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItem';
import * as API from './services/launches';


export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  return (
    <>
      <Image m={4} src={logo} alt="spaceX Logo" width=""/>
      <Heading as="h1" size="lg">SpaceX Launches</Heading>
      <section>
        {launches.map((launch) => (
        <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </section>
    </>
  )
}
