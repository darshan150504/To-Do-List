import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  add = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = this.state;
    if (name === "" || email === "" || phone === "" || address === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", phone: "", address: "" });
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="ui main">
        <br />
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
