'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="py-16">
      <h1 className="text-5xl text-center mb-6">Ranch Calendar</h1>
      <div className="border-foreground">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}