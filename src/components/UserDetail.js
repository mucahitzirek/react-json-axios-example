import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { postsId } from "../api/apiPath";

const UserDetail = (props) => {
  const { id } = props.match.params;
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    postsId(id)
      .then((response) => {
        setUserDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>User Detail</div>;
};
export default UserDetail;
