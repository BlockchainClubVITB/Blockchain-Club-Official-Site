/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiSearch, FiX, FiArrowRight } from "react-icons/fi";
import { BackgroundBoxesDemo } from "../BackgroundBoxes";
import EventData from "./EventData";

const TimelineSection = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, events]);

  const EventCard = ({ event, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } md:gap-8 mb-12`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-6 flex items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-neutral-900 shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
      </div>

      {/* Date indicator */}
      <div
        className={`w-1/2 pt-6 hidden md:block ${
          index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
        }`}
      >
        <span className="font-bold text-2xl text-amber-500 font-mono">
          {event.date}
        </span>
      </div>

      {/* Event card */}
      <motion.div
        className={`relative z-10 flex-1 ${
          index % 2 === 0 ? "ml-8 md:ml-0" : "mr-8 md:mr-0"
        } w-full md:w-[calc(50%-2rem)]`}
        onClick={() => setSelectedEvent(event)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="p-4 rounded-xl shadow-lg cursor-pointer bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 transition-colors">
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
            <img
              src={Array.isArray(event.images) ? event.images[0] : event.image}
              alt={event.name}
              className="object-cover w-full h-full transform transition-transform hover:scale-110 duration-500"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x300?text=Event+Image";
              }}
            />
            <div className="absolute top-2 right-2 md:hidden bg-black/70 px-2 py-1 rounded text-xs text-amber-500 font-mono">
                {event.date}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-white">{event.name}</h3>
          
          <div className="mt-4 flex items-center text-amber-500 text-sm font-semibold group">
            View Details <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const Modal = ({ event }) => (
    <AnimatePresence>
      {event && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative max-w-2xl w-full p-6 rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors z-10"
            >
              <FiX size={24} />
            </button>
            <div className="h-64 w-full rounded-xl overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
                <img
                src={Array.isArray(event.images) ? event.images[0] : event.image}
                alt={event.name}
                className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-white">{event.name}</h2>
            <div className="flex items-center gap-2 text-sm text-amber-500 mb-6 font-mono">
              <FiCalendar />
              <span>{event.date}</span>
            </div>

            <div className="flex justify-end gap-4">
                <button onClick={() => setSelectedEvent(null)} className="px-6 py-2 rounded-lg text-neutral-400 hover:text-white transition-colors">Close</button>
                <NavLink to={`/events/${event.name}`} className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors font-semibold">Full Event Page</NavLink>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      <div className="flex justify-end mb-12 px-4">
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="relative py-8 px-4">
        {/* Continuous Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full top-0 w-0.5 bg-neutral-700/50"></div>

        {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
            <EventCard key={event.id || index} event={event} index={index} />
            ))
        ) : (
            <div className="text-center text-neutral-500 py-10">
                No events found matching your search.
            </div>
        )}
      </div>

      <Modal event={selectedEvent} />
    </div>
  );
};

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventData = EventData();
    setEvents(eventData);
  }, []);

  const recentEvent = events.slice(-1)[0];
  const pastEvents = events.slice(0, -1).reverse();

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col items-center pb-20 overflow-x-hidden">
      <BackgroundBoxesDemo
        heading={"OUR EVENTS"}
        subheading={"Check out our events and relive the magic!"}
      />

      <h2 className="text-3xl font-bold mt-20 text-amber-500">Latest Event</h2>
      <hr className="border-neutral-700 mb-4 mx-auto w-24 mt-4 border-2 rounded-full" />
      
      {recentEvent && (
        <div className="relative w-full max-w-5xl mt-8 px-4 mb-20" key={recentEvent.id}>
          <NavLink to={`/events/${recentEvent.name}`}>
            <div className="relative border-2 border-amber-500/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
              <img
                src={recentEvent.images ? recentEvent.images[0] : recentEvent.image}
                alt="Latest Event"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row justify-between items-end md:items-center">
                <div>
                    <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                        Newest
                    </span>
                    <p className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{recentEvent.name}</p>
                </div>
                <p className="text-xl text-amber-500 font-mono mt-4 md:mt-0 bg-neutral-900/80 px-4 py-2 rounded-lg border border-neutral-700">
                    {recentEvent.date}
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      )}

      <div className="w-full bg-neutral-900">
        <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-white">Timeline</h2>
            <hr className="border-neutral-700 mt-4 mx-auto w-24 border-2 rounded-full" />
        </div>
        
        <TimelineSection events={pastEvents} />
      </div>
    </div>
  );
}

export default Event;