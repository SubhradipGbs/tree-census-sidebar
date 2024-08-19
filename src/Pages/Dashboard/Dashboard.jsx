import React from "react";
import { MapCont, StatCard } from "../../Components";
import { Typography } from "@material-tailwind/react";
import Chart from "/public/chart.png";

const Dashboard = () => {
  return (
    <div className="m-1">
      <section className="w-full flex flex-wrap gap-2 mb-3">
        <div className="min-w-[300px] flex-1">
          <StatCard title={"Total No. of Trees"} count={2950} />
        </div>
        <div className="min-w-[300px] flex-1">
          <StatCard title={"Total Area Surveyed"} count={2950} />
        </div>
        <div className="min-w-[300px] flex-1">
          <StatCard title={"Total No. of Requests"} count={2950} />
        </div>
      </section>
      <section>
        <div className="flex gap-2 flex-wrap">
          <div className="flex-1 min-w-[300px] bg-white min-h-[350px] rounded-md shadow-md border border-white">
            <div className="p-2 border-b-2">
              <Typography className="font-bold">Survey Report</Typography>
            </div>
            <div>
              <MapCont location={[22.5158062, 88.3026134]} data={""} />
            </div>
          </div>
          <div className="flex-1 min-w-[300px] bg-white min-h-[350px] rounded-md overflow-hidden shadow-md border border-white">
            <div className="p-2">
              <Typography className="font-bold">Tree Census Report</Typography>
            </div>
            <div className="border-t-2 m-auto">
              <img src={Chart} alt="chart" className="w-5/6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
