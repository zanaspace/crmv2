"use client";

import React from "react";

const steps = [
  { title: "Request", subtitle: "Form, email or API" },
  { title: "Route", subtitle: "To the right process" },
  { title: "Assign", subtitle: "Queue or self-claim" },
  { title: "Collaborate", subtitle: "People & documents" },
  { title: "Approve", subtitle: "Rules & sign-off" },
  { title: "Fulfil", subtitle: "Deliver the outcome" },
  { title: "Record", subtitle: "Captured & retained" },
  { title: "Measure", subtitle: "SLA & performance" }
];

export function WorkflowStepper() {
  return (
    <div className="w-full bg-gradient-to-r from-[#162032] via-[#0f172a] to-[#162032] p-10 rounded-2xl border border-[#1e293b] shadow-2xl overflow-hidden relative">
      
      {/* The glowing orange track */}
      <div aria-hidden className="absolute top-[48px] left-0 w-full px-12 z-0">
        <div className="h-1 bg-[var(--primary)] w-full"></div>
      </div>

      <ol aria-label="Workflow steps" className="flex items-start justify-between relative z-10 px-4">
        {steps.map((step, index) => {
          // The last node "Measure" has a slightly different styling in the mockup (the title is orange)
          const isLast = index === steps.length - 1;
          
          return (
            <li key={index} className="flex flex-col items-center text-center w-24">
              
              {/* Glowing Node */}
              <div aria-hidden className="w-5 h-5 rounded-full bg-[var(--primary)] mb-5 ring-4 ring-[var(--accent-soft)] relative">
                <div className="absolute inset-0 bg-white/30 rounded-full"></div>
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <span className={`font-heading font-bold text-[0.85rem] ${isLast ? "text-[var(--primary)]" : "text-white"}`}>
                  {step.title}
                </span>
                <span className="text-[0.65rem] text-[#9DB0C6] leading-tight font-medium">
                  {step.subtitle}
                </span>
              </div>
              
            </li>
          );
        })}
      </ol>
    </div>
  );
}
