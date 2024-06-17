import { useEffect, useState } from 'react';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('https://public-api.wordpress.com/wp/v2/sites/incorporateservice.wordpress.com/posts?per_page=${postsPerPage}&page=${page}');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title.rendered}</h2>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p dangerouslySetInnerHTML={{ __html: event.content.rendered }}></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
