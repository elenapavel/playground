import React from "react";
import Link from "next/link";
import Nav from "../components/nav";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
