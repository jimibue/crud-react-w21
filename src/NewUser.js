import { useState } from "react";
const NewUser = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    // by default we a refreshing the page
    // we don't refresh page in SPA
    event.preventDefault();
    // get values from my form
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
    props.x({
      id: Math.random(),
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  };
  return (
    <div className="user-form">
      <h1>New User Form</h1>
      <form onSubmit={handleSubmit}>
        <p>first name</p>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p>last name </p>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <p>email </p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button>add user</button>
      </form>
    </div>
  );
};
export default NewUser;
