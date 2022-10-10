import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { getUserPerformance } from "../../../../service/user-http.service";
import "./performanceGraph.scss";

/**
 * Component - Graph displaying the performance data of a user
 * @module PerformanceGraph
 * @param { Object } object
 * @param { Integer } object.id - The id of the user
 * @returns { HTMLElement } -
 */
const PerformanceGrapĥ = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserPerformance(id).then((response) => {
      setData(response.data);
    });
  }, [id]);

  return (
    <div className="performanceGraph">
      {data && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data}
            margin={{
              top: 30,
              right: 5,
              left: 5,
              bottom: 15,
            }}
          >
            <PolarGrid stroke="white" radialLines={false} />
            <PolarAngleAxis dataKey="kind" fontSize="12px" stroke="white" tickLine={false} />
            <Radar name="Perf" dataKey="value" fill="hsl(0, 100%, 50%)" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

PerformanceGrapĥ.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PerformanceGrapĥ;
