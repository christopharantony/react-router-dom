import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");
  if (data?.isError) {
    return <p>{data.message}</p>;
  }
  const event = data?.event || {};
  return (
    <>
      <EventForm event={event}/>
    </>
  );
};

export default EditEventPage;
