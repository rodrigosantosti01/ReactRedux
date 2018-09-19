import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import './template/custom.css'
import Menu from './template/menu'
import Routes from './routes'


export default props => (
    <div className='container'>
      <Menu/>
      <Routes/>
    </div>
)
