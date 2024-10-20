import React, { Component } from "react";
import Loading from "./Loading";
import classnames from "classnames";
import Panel from "./Panel";
import {
  getTotalPhotos,
  getTotalTopics,
  getUserWithMostUploads,
  getUserWithLeastUploads,
} from "helpers/selectors";

const data = [
  {
    id: 1,
    label: "Total Photos",
    value: getTotalPhotos
  },
  {
    id: 2,
    label: "Total Topics",
    value: getTotalTopics
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: getUserWithMostUploads
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: getUserWithLeastUploads
  }
];

class Dashboard extends Component {
  state = {
    loading: true,
    focused: null,
    photos: [],
    topics: []
  };

  selectPanel(id) {
    this.setState((previousState) => ({
      focused: previousState.focused !== null ? null : id,
    }));
  }
  // Add some lifecycle methods here
  // Stores the current focused state in local storage and loads it on page reload
  componentDidMount() {
    const focused = JSON.parse(localStorage.getItem("focused"));

    if (focused) {
      this.setState({ focused });
    }
    const urlsPromise = ["/api/photos", "/api/topics"].map((url) =>
      fetch(url).then((response) => response.json())
    );

    Promise.all(urlsPromise).then(([photos, topics]) => {
      this.setState({
        loading: false,
        photos: photos,
        topics: topics,
      });
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.focused !== this.state.focused) {
      localStorage.setItem("focused", JSON.stringify(this.state.focused));
    }
  }
  render() {
    console.log(this.state)
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = (
      this.state.focused
        ? data.filter((panel) => this.state.focused === panel.id)
        : data
    ).map((panel) => (
      <Panel
        key={panel.id}
        label={panel.label}
        value={panel.value(this.state)}
        onSelect={() => this.selectPanel(panel.id)}
      />
    ));

    //If this.state.focused is null then return true for every panel.
    // If this.state.focused is equal to the Panel, then let it through the filter.

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;

// https://web.compass.lighthouselabs.ca/p/web-flex-2/workbooks/web-flex-v2-m07w19/activities/3291?journey_step=38&workbook=291 ended here
