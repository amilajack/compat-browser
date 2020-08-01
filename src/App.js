import React from 'react';
import { HotTable } from '@handsontable/react';
import metadata from 'ast-metadata-inferer';
import './App.css';

export default class HotApp extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      Object.keys(metadata[0]),
      ...metadata.map(val => ({
        ...val,
        compat: JSON.stringify(val.compat)
      })).map(eachMetadata => Object.values(eachMetadata)).sort((a, b) => a[0] - b[0])
    ];
  }

  render() {
    return (<HotTable data={this.data} colHeaders={true} rowHeaders={true} />);
  }
}
