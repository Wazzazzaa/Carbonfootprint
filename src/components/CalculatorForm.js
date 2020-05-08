import React from "react";



export default class Form extends React.Component {
  state = {
    electronics: '',
    fuel: '',
    waste: '',
    water: '',
    vehicle: '',
    bus: '',
    taxi: '',
    rail: '',
    flying: '',
  };




  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let ele =  this.state.electronics * 0.7;
    let ful = this.state.fuel * 0.22;
    let bus = this.state.bus * 0.9495;
    let was = this.state.waste * 50 * 0.06;
    let wat = this.state.water * 365 * 0.03;
    let veh = this.state.vehicle * 0.9495;
    let rai = this.state.rail * 0.14;
    let tax = this.state.taxi * 0.9495;
    let fly = this.state.flying * 1.09 * 0.218;

    const total = ele + bus + ful + was + wat + veh + tax + rai + fly;
    console.log(total);
  };

  render() {
    return (
        <form>
          <label>
            Electricity use (kWh/yr):
            <input
                name="electronics"
                placeholder="electronics"
                value={this.state.electronics}
                onChange={e => this.setState({electronics: e.target.value})} />
          </label>
          <br />
          <label>
            Fuel use (litres/yr):
            <input
                name="fuel"
                placeholder="fuel"
                value={this.state.fuel}
                onChange={e => this.setState({fuel: e.target.value})} />
          </label>
          <br />
          <label>
            Waste use (kg/week):
            <input
                name="waste"
                placeholder="waste"
                value={this.state.waste}
                onChange={e => this.setState({waste: e.target.value})} />
          </label>
          <br />
          <label>
            Water use (litres/day):
            <input
                name="water"
                placeholder="water"
                value={this.state.water}
                onChange={e => this.setState({water: e.target.value})} />
          </label>
          <br />

          <label>
            Driven distance (km/yr):
            <input
                name="vehicle"
                placeholder="vehicle"
                value={this.state.vehicle}
                onChange={e => this.setState({vehicle: e.target.value})} />
          </label>
          <br />

          <label>
            Distance traveled by bus (km/yr):
            <input
                name="bus"
                placeholder="bus"
                value={this.state.bus}
                onChange={e => this.setState({bus: e.target.value})} />
          </label>
          <br />
          <label>
            Distance traveled by taxi (km/yr):
            <input
                name="taxi"
                placeholder="taxi"
                value={this.state.taxi}
                onChange={e => this.setState({taxi: e.target.value})} />
          </label>
          <br />
          <label>
            Distance traveled by rail (km/yr):
            <input
                name="rail"
                placeholder="rail"
                value={this.state.rail}
                onChange={e => this.setState({rail: e.target.value})} />
          </label>
          <br />
          <label>
            Distance traveled by flying (km/yr):
            <input
                name="flying"
                placeholder="flying"
                value={this.state.flying}
                onChange={e => this.setState({flying: e.target.value})} />
          </label>
          <br />

          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
    );
  }
}


