import React, { FC } from "react";
import "./avatar.component.css";

interface Avatar {
  link: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Avatar: FC<Avatar> = ({ link }) => {
  return (
      <div className="avatar">
        <img src={link} alt="" className="image"/>
      </div>
  );
};

export default Avatar;
