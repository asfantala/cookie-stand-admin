import React from 'react';
import { hours } from '@/data';

export default function ReportTable({ reports, onDelete }) {
  const hourTotals = Array.from({ length: hours.length }, () => 0);

  reports.forEach((report) => {
    const hourlySales = report.hourly_sales;
    if (hourlySales) {
      hourlySales.forEach((sales, idx) => {
        hourTotals[idx] += sales;
      });
    }
  });

  return (
    <div className="flex justify-center mb-4">
      {reports.length === 0 ? (
        <h2 className="text-2xl">No Cookie Stands Available</h2>
      ) : (
        <table className="w-full border-collapse border border-green-500">
          <thead>
            <tr>
              <th className="bg-green-500 text-white text-left px-4 py-2 border border-green-500">
                Location
              </th>
              {hours.map((hour) => (
                <th
                  className="bg-green-500 text-white text-center border border-green-500"
                  key={hour}
                >
                  {hour}
                </th>
              ))}
              <th className="bg-green-500 text-white text-center px-4 py-2 border border-green-500">
                Totals
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="text-left px-4 py-2 border border-green-500">
                  <span>{report.location}</span>
                  <button
                    className="inline-flex items-center justify-center h-6 w-6 text-red-500 ml-2"
                    onClick={() => onDelete(report.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </td>
                {report.hourly_sales ? (
                  report.hourly_sales.map((sales, index) => (
                    <td key={index} className="text-center border border-green-500">
                      {sales}
                    </td>
                  ))
                ) : (
                  <td colSpan={hours.length} className="text-center border border-green-500">
                    N/A
                  </td>
                )}
                <td className="text-center border border-green-500">
                  {report.hourly_sales ? report.hourly_sales.reduce((a, b) => a + b, 0) : 0}
                </td>
              </tr>
            ))}
            <tr>
              <th className="bg-green-500 text-white text-left px-4 py-2 border border-green-500">
                Totals
              </th>
              {hourTotals.map((total, index) => (
                <td key={index} className="text-center border border-green-500">
                  {total}
                </td>
              ))}
              <td className="bg-green-500 text-white text-center px-4 py-2 border border-green-500">
                {hourTotals.reduce((a, b) => a + b, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
