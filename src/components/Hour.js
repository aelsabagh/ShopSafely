import React from "react";

function formatHour(hour) {
  const amOrPm = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}${amOrPm}`;
}

function formatColor(hourData) {
  const hue=((1-hourData)*120).toString(10);
  // return 'hsl(",hue,",100%,50%)"].join("")';
  // return `hsl(${hue},100%,50%)`;
  return `rgba(128,0,128, ${hourData / 100})`
}

export function Hour({ hourData, hour, day, id }) {
  const hourCol = formatColor(hourData);
  const noDataMessage =
    hourData === 0
      ? " - either the location is closed or there is not enough data"
      : "";
  return (
    
    <div
      style={{ background: hourCol }}
      className="hourVal"
      role="img"
      aria-label={`${hourCol} ${day} at ${formatHour(
        hour
      )} is ${hourData}% busy${noDataMessage}.`}
    ></div>
  );
}
