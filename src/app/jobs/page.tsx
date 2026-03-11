"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      const res = await fetch("/api/jobs");
      const jobs = await res.json();
      setData(jobs);
    };

    getJobs();
  }, []);

  const filtered = data.filter((job) => {
    const value = search.toLowerCase();

    return (
      job.title?.toLowerCase().includes(value) ||
      job.company?.toLowerCase().includes(value) ||
      job.description?.toLowerCase().includes(value) ||
      job.location?.toLowerCase().includes(value) ||
      job.salary?.toLowerCase().includes(value) ||
      job.type?.toLowerCase().includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Jobs</h1>

      {/* Search */}
      <div className="flex justify-center mb-10 gap-3">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
          onClick={}
        >
          Find Jobs
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>

              <p className="text-sm text-gray-500 mt-1">{item.company}</p>

              <p className="mt-3 text-gray-700 line-clamp-3">
                {item.description}
              </p>

              <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>{item.type}</span>
                <span>{item.location}</span>
                <span className="text-green-600">{item.salary}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No jobs found
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
