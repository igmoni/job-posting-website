"use client";
import React, { FormEvent, useCallback } from "react";

const page = () => {
  const handleSubmit = useCallback(async (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          Post a Job
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl border border-gray-200 p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>

            <input
              type="text"
              name="title"
              id="title"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>

            <input
              type="text"
              name="company"
              id="company"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>

            <input
              type="text"
              name="location"
              id="location"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Job Type
            </label>

            <select
              name="type"
              id="type"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <textarea
              name="description"
              id="description"
              rows={6}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700"
            >
              Salary (optional)
            </label>

            <input
              type="text"
              name="salary"
              id="salary"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="mx-auto block rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
