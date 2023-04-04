import { useLocation } from "react-router-dom";
import { useState } from "react";
import SpotifyButton from "../components/SpotifyLoginButton";

export default function Homepage() {
  const [formValue, setFormValue] = useState("");
  const [name, setName] = useState(null);

  // handle input change event
  const handleInputChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setName(formValue);
  };

  return (
    <div className="container">
      {!name && 
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">
            Name:
            <input
              className="form-control"
              type="text"
              value={formValue}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary">
            Enter
          </button>
        </div>
      </form>
      }
      {name && 
      <h1>Good morning, {name}</h1>
      }
      <SpotifyButton />
    </div>
  );
}
