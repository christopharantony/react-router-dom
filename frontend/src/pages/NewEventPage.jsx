import React from "react";
import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const action = async ({ request, param }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    return {
      isError: true,
      message: "Could not save event.",
    };
  }

  return redirect("/events");
};
