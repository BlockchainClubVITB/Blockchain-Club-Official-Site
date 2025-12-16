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
<<<<<<< HEAD
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
=======
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col items-center p-4">
>>>>>>> ec3cdb5 (Initial commit with website changes)
      <BackgroundBoxesDemo
        heading={"OUR PAST EVENTS"}
        subheading={"Check out our past events and relive the magic! "}
      />

      <h2 className="text-3xl font-bold mt-12">Latest Event</h2>
      <hr className="border-white mb-4 mx-auto w-1/2 mt-6" />
      {recentEvent && (
        <div className="relative w-full max-w-5xl mt-12" key={recentEvent.id}>
<<<<<<< HEAD
          {" "}
          <NavLink to={`/events/${recentEvent.name}`}>
            {" "}
            <img
              src={recentEvent.images[0]}
              alt="Large"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 backdrop-blur-lg flex justify-between">
              <p>{recentEvent.name}</p>
              <p>{recentEvent.date}</p>
=======
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
>>>>>>> ec3cdb5 (Initial commit with website changes)
            </div>
          </NavLink>
        </div>
      )}

      <div className="w-full max-w-5xl mt-8 text-center">
        <h2 className="text-3xl font-bold ">Past Events</h2>
        <hr className="border-white mt-2 mb-8 mx-auto w-1/2" />

<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-5">
          {pastEvents.map((event, index) => (
            <NavLink to={`/events/${event.name}`} key={event.id}>
              <div className="relative border-4 border-black cursor-pointer ">
                <div className="border-4 border-orange-500 w-70 h-64">
                  <img
                    src={event.images[0]}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <span className="flex justify-between">
                    <p>{event.name}</p>
                    <p>{event.date}</p>
                  </span>
=======
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
>>>>>>> ec3cdb5 (Initial commit with website changes)
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
