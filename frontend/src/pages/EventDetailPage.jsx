import React from "react";
import EventItem from "../components/EventItem";
import { redirect, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-details");
  if (data?.isError) {
    return <p>{data.message}</p>;
  }
  const event = data?.event || {};
  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    return {
      isError: true,
      message: "Fetching event details failed, please try again later.",
    };
  } else {
    const res = await response.json();
    return res;
  }
};

export const action = async ({ request, params }) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: "DELETE",
  });

  if (!response.ok) {
    return {
      isError: true,
      message: "Could not delete event.",
    };
  } else {
    return redirect("/events");
  }
};
