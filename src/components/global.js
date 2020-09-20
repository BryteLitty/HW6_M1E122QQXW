import React, { Component } from "react";

export default class datum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://gtla6-covidtracker.herokuapp.com/")
      .then((res) => res.json())
      .then((jsonData) => {
        this.setState({
          isLoaded: true,
          data: jsonData,
        });
      });
  }
  render() {
    const { data } = this.state;
    console.log(typeof data);
    return (
      <>
        <div className="container">
          <div className="row justify-content-between">
            {/* <div className="global-data"> */}
              <div className="col-2 box">
                <p>Total Cases <i class="fa fa-arrow-circle-up icons"></i></p>
                <b className="counterPara">{data.cases}</b>
              </div>
              <div  className="col-2 box">
                <p>Active Cases <i class="fa fa-arrow-circle-up icons"></i></p>
                <b className="counterPara">{data.active}</b>
              </div>
              <div className="col-2 box">
                <p>Recovered <i class="fa fa-arrow-circle-down icons-green"></i></p>
                <b className="counterPara">{data.recovered}</b>
              </div>
              <div className="col-2 box">
                <p>Deaths <i class="fa fa-arrow-circle-up icons"></i></p>
                <b className="counterPara">{data.deaths}</b>
              </div>
            </div>
          </div>
        {/* </div> */}
      </>
    );
  }
}
