import React, { Component } from 'react'
import { BallTriangle } from 'react-loader-spinner'

export default class Spinner extends Component {
  render() {
    return (
        <div className="">
            <BallTriangle  height = {80} width = {80} color = "blue"  />
        </div>
    )
  }
}
