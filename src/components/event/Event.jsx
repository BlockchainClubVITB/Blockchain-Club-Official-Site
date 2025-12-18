import { useEffect, useState } from "react";
import { BackgroundBoxesDemo } from "../BackgroundBoxes";
import { NavLink } from "react-router-dom";
import EventData from "./EventData";

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventData = EventData();
    setEvents(eventData);
  }, []);

  const recentEvent = events.slice(-1)[0];
  const pastEvents = events.slice(0, -1);

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col items-center p-4">
      <BackgroundBoxesDemo
        heading={"OUR PAST EVENTS"}
        subheading={"Check out our past events and relive the magic! "}
      />

      <h2 className="text-3xl font-bold mt-12">Latest Event</h2>
      <hr className="border-white mb-4 mx-auto w-1/2 mt-6" />
      {recentEvent && (
        <div className="relative w-full max-w-5xl mt-12" key={recentEvent.id}>
          <NavLink to={`/events/${recentEvent.name}`}>
            <div className="relative border-4 border-amber-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <img
                src={recentEvent.images[0]}
                alt="Large"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-70 p-4 backdrop-blur-lg flex justify-between items-center rounded-b-xl">
                <p className="text-lg font-semibold">{recentEvent.name}</p>
                <p className="text-sm text-neutral-400">{recentEvent.date}</p>
              </div>
            </div>
          </NavLink>
        </div>
      )}

      <div className="w-full max-w-5xl mt-8 text-center">
        <h2 className="text-3xl font-bold ">Past Events</h2>
        <hr className="border-white mt-2 mb-8 mx-auto w-1/2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-5">
          {pastEvents.map((event, index) => (
            <NavLink to={`/events/${event.name}`} key={event.id} className="group">
              <div className="relative border-4 border-amber-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group-hover:shadow-amber-500 transition-all duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:scale-105 h-60">
                <img
                    src={event.images[0]}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-70 p-2 flex justify-between items-center rounded-b-xl">
                  <p className="text-base font-semibold">{event.name}</p>
                  <p className="text-xs text-neutral-400">{event.date}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
