import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userGet } from "../api/apiPath";

const UsersComponent = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    userGet().then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        {comments.map((output) => {
          const { id, name, username, address, company } = output;
          return (
            <div className="card border-info mb-3 mt-2">
              <div className="card-header d">
                <div className="row">
                  <div className="col-4">
                    <Link to={`/posts/${id}`}>
                      {id} {name}
                    </Link>
                  </div>
                  <div className="ml-3 col">
                    <strong>Adress: </strong> {address.city}
                    <strong> City: </strong> {address.street}
                  </div>
                </div>
              </div>
              <div className="card-body text-info">
                <h5 className="card-title">{company.catchPhrase}</h5>
                <hr />
                <p className="card-text">{username}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersComponent;
