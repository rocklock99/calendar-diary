"use client";

import Calendar from "@/components/Calendar.jsx";
import DiaryEntry from "@/components/DiaryEntry.jsx";
import Month from "@/components/Month.jsx";
import Year from "@/components/Year.jsx";
import { useState } from "react";

export default function Home() {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(7);
  const [day, setDay] = useState("");
  const [entries, setEntries] = useState([]);

  return (
    <main>
      <h1>Calendar Diary</h1>
      <Month month={month} setMonth={setMonth} setYear={setYear} />
      <Year year={year} setYear={setYear} />
      <Calendar
        entries={entries}
        month={month}
        year={year}
        day={day}
        setDay={setDay}
      />
      <DiaryEntry
        key={day}
        day={day}
        entries={entries}
        setEntries={setEntries}
      />
    </main>
  );
}
