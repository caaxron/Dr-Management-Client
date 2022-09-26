import React from "react";

import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar } from "@mobiscroll/react";
import { useQuery } from "react-query";
import { getAllSchedules } from "../api/schedule";
import { FallingLines } from "react-loader-spinner";
import { AddSchedule } from "./AddSchedule";

function Schedule() {
  const { data, isLoading } = useQuery("schedules", getAllSchedules);
  const [calender, setCalender] = React.useState(false);
  const [agenda, setAgenda] = React.useState(false);

  const renderEventContent = React.useCallback((data) => {
    return (
      <React.Fragment>
        <div>
          <h4 className="text-2xl">
            <strong>Title: </strong>
            {data.original.title}
          </h4>
          <p className="text-lg">
            <strong>Description: </strong>
            {data.original.description}
          </p>
          <p className="text-lg">
            <strong>Location: </strong>
            {data.original.location}
          </p>
        </div>
      </React.Fragment>
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: {
        type: `${calender ? "month" : "week"}`,
        popover: true,
        count: true,
      },
      agenda: { type: `${agenda ? "week" : "day"}` },
    };
  }, [calender, agenda]);

  if (isLoading) {
    return (
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    );
  }

  return (
    <>
      <h1 className="text-cyan-700 text-2xl my-5">Schedule</h1>
      <div className="grid grid-cols-1 ">
        <div className="bg-gray-100">
          <div className="flex justify-end space-x-2 pr-2">
            <button
              className="my-2 px-6 py-2.5 bg-cyan-700 rounded text-white"
              onClick={() => setCalender(!calender, console.log(calender))}
            >
              {calender ? "Calender week" : "Calender month"}
            </button>
            <button
              className="my-2 px-6 py-2.5 bg-cyan-700 rounded text-white"
              onClick={() => setAgenda(!agenda, console.log(agenda))}
            >
              {agenda ? "Agenda day" : "Agenda week"}
            </button>
            <AddSchedule />
          </div>
          <Eventcalendar
            className="border-8 border-cyan-700"
            theme="ios"
            themeVariant="light"
            renderEventContent={renderEventContent}
            view={view}
            data={data}
            // onEventClick={onEventClick}
          />
        </div>
      </div>
    </>
  );
}

export default Schedule;
