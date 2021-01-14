import React, {Component} from 'react';
import { Button, DatePicker, version } from "antd";
import './app.css';

export default class App extends Component {

    render() {
        return(
          <div className="App">
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
              Primary Button
            </Button>
          </div>
        )
    }

}
