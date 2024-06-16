import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();

  if (data?.isError) {
    return <p>{data.message}</p>;
  }

  const events = data?.events || [];

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return {
      isError: true,
      message: "Fetching events failed, please try again later.",
    };
  } else {
    const res = await response.json();
    return res;
  }
}
