import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AreaChart, Area, Tooltip, ResponsiveContainer, CartesianGrid, XAxis } from "recharts";
import { getUserAverageSession } from "../../../../service/user-http.service";

import "./averageSessionGraph.scss";

/**
 * Component - Graph displaying the average session data of a user
 * @module AverageSessionGraph
 * @param { Object } object
 * @param { Integer } object.id - The id of the user
 * @returns { HTMLElement } -
 */
const AverageSessionGraph = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserAverageSession(id).then((response) => {
      setData([response]);
    });
  }, [id]);

  return (
    <div className="averageSessionGraph">
      <h3 className="averageSessionGraphLabel">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 30,
            right: 8,
            left: 8,
            bottom: 15,
          }}
        >
          <CartesianGrid horizontal="false" vertical="false" width={0} height={0} />
          <XAxis dataKey="day" tick={{ stroke: "white", strokeWidth: 1 }} tickLine={false} axisLine={false} />
          <Tooltip />
          {data && data.map((data, index) => <Area type="monotone" dot={false} fill="gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.106534) 100%)" fillOpacity={0.1} stroke="hsl(0, 0%, 100%)" strokeWidth={2} dataKey="sessionLength" data={data.sessions} name="min" key={index} margin={30} className="area" />)}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSessionGraph.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AverageSessionGraph;
