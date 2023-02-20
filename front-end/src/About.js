import { Link } from 'react-router-dom'
import './Home.css' /**this page won't be much different to the home page, so utilize its styling */
import me from './about.jpg'

/**
 * A React component that represents the About-me page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>About me: David!</h1>
      <img src={me} alt="6 year old me? at my aunt's house in the Dominican Republic" />
      <p>
        Hi everyone, I'm David. A little bit about me, I was born in the Dominican Republic and lived there until I was about 4 1/2 years old. On this page is a picture
        of me in the Dominican Republic on of my many summer vacations to the island. Some of my most cherished memories are from those two month long summer vacations 
        I would take in the Dominican Republic.
        </p>
        <p>
        Anyways, afterwards I moved with my family the U.S., 
        specifically New York City. I lived in NYC for 4 years before moving right across the Hudson River to a town called Fort Lee. I've lived there ever since. Due to my extremely close proximity to the City 
        (I can see the GWB from my street corner and its a 15 minute walk to get on the bridge from my house), I commute to campus each day. Sometimes it does get tiring having to commute, especially 
        on days when I am extremely tired and just want to get home, however, the amount of money I save more than makes up for it.
        </p>
        <p>
        Besides these basic facts, another thing about me is that I like baseball. As a kid, I was really into the sport and was a devout New York Yankees fan. However, during my teenage years I stopped 
        paying attention to the sport, but as of late I have slowly been rekindiling my love for baseball. As for what team I support, TBD!
        Additionally, in my spare time, I enjoy reaing books, both non-fiction and fiction works, as well as 
        watching tv series. Currently, I am watching "The Last of Us". I highly recommend it. If you have not seen it, I encourage you to do so!
        </p>
        <p>
        Some things I would like to do or make a habbit of in the near future are to start working out (maybe try a martial arts?), try mountain biking, and explore some new city/region.
        As of now, I haven't been able to start any of them due to most of my time being consumed by work, class, homeworks, and general commute times.
        </p>
    </>
  )
}

// make this component available to be imported into any other file
export default About