import React from "react";
import Toolbar from "../toolbar/Toolbar";
import ProjectList from "../projectList/ProjectList";
import './portfolioStyle.css';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: props.selected,
      projects: props.projects,
    };
  }

  onSelectFilter = (elem) => {
    this.setState({ selected: elem });
  }

  render() {
    return (
      <>
        <div className="buttons">
          <Toolbar filters={this.state.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter} />
        </div>
        <div className="images">
          <ProjectList projects={this.state.projects.filter(elem => this.state.selected === "All" || elem.category === this.state.selected)} />
        </div>
      </>
    )
  }
}