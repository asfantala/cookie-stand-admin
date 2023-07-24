import React from 'react';
import { hours } from '@/data';


export default function ReportTable({ reports }) {
  const hourTotals = Array.from({ length: hours.length }, () => 0);

  reports.forEach((report) => {
    report.hourly_sales.forEach((sales, idx) => {
      hourTotals[idx] += sales;
    });
  });

  return (
    <div className="flex justify-center mb-4">
    {reports.length === 0 ? (
      <h2 className="text-2xl">No Cookie Stands Available</h2>
    ) : (
      <table className="w-full border-collapse border border-green-500">
        <thead>
          <tr>
            <th className="bg-green-500 text-white text-left px-4 py-2 border border-green-500">Location</th>
            {hours.map(hour => (
              <th className="bg-green-500 text-white text-center border border-green-500" key={hour}>{hour}</th>
            ))}
            <th className="bg-green-500 text-white text-center px-4 py-2 border border-green-500">Totals</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td className="text-center border border-green-500">{report.location}</td>
              {report.hourly_sales.map((sales, index) => (
                <td key={index} className="text-center border border-green-500">{sales}</td>
              ))}
              <td className="text-center border border-green-500">
                {report.hourly_sales.reduce((acc, sales) => acc + sales, 0)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="bg-green-500 text-white text-left px-4 py-2 border border-green-500">Total</td>
            {hours.map((_, index) => (
              <td
                key={index}
                className="bg-green-500 text-white text-center border border-green-500"
              >
                {reports.reduce((acc, report) => acc + report.hourly_sales[index], 0)}
              </td>
            ))}
            <td className="bg-green-500 text-white text-center px-4 py-2 border border-green-500">
              {reports.reduce((acc, report) => acc + report.hourly_sales.reduce((a, b) => a + b, 0), 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    )}
    </div>
  );
}