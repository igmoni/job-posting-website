"use client";
import React, { useCallback } from "react";

const page = () => {
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {
        title: formData.get("title"),
        company: formData.get("company"),
        location: formData.get("location"),
        type: formData.get("type"),
        description: formData.get("description"),
        salary: formData.get("salary"),
      };
      console.log(data);
      try {
        await fetch("/api/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "applcation/json",
          },
          body: JSON.stringify(data),
        });
        window.location.href = "/jobs";
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-125 rounded-lg bg-white p-8 shadow-md space-y-5"
      >
        <h1 className="text-xl font-semibold text-center">Post a Job</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm font-medium">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="company" className="text-sm font-medium">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            required
            className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="type" className="text-sm font-medium">
            Job Type
          </label>
          <select
            name="type"
            id="type"
            required
            className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={5}
            required
            className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="salary" className="text-sm font-medium">
            Salary (optional)
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default page;
