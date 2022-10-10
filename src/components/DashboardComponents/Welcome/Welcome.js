import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUserMainData } from "../../../service/user-http.service";
import "./welcome.scss";

/**
 * Component displaying the welcome message for a user
 * @module Welcome
 * @param { Object } object
 * @param { Integer } object.id - The id of the user
 * @returns { HTMLElement } -
 */
const Welcome = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserMainData(id).then((response) => {
      setData(response.userInfos);
    });
  }, [id]);

  return (
    <div className="welcome">
      {data && (
        <p>
          Bonjour <span className="welcome__userName"> {data.firstName}</span>
        </p>
      )}

      <p className="welcome__congrats">
        Félicitations ! Vous avez explosé vos objectifs hier <span>&#128079;</span>
      </p>
    </div>
  );
};

Welcome.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Welcome;
