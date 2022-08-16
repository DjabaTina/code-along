import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  console.log(data);

  return (
    <div className="h-screen bg-gradient-to-br from-fuchsia-400 to-orange-500 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white  rounded-xl p-10">
        <form>
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-x-2">
            <div>
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="from-input"
                value={data.firstName}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-input"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                id="middleName"
                className="form-input"
                value={data.middleName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <label htmlFor="mail">
              <input
                type="radio"
                name="gender"
                value="gender"
                id="gender"
                onChange={handleChange}
              />{" "}
              Male
            </label>
          </div>

          <div>
            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <div>
            <label
              htmlFor="dateOfBirth"
              name="dataOfBirth"
              value={data.dateOfBirth}
              onChange={handleChange}
            >
              Date of Birth
            </label>
            <input type="date" />
          </div>

          <div>
            <lablel htmlFor="phone">Phone Number</lablel>
            <input
              type="number"
              placeholder="xxx-xxx-xxxx"
              name="phoneNumber"
              value={data.phoneName}
              onChange={handleChange}
            />
          </div>

          <div>
            <lable htmlFro="email">Email</lable>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john.djabaaugustina1@gmail.com"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
