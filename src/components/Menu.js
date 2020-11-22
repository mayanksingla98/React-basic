import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <div className='menu'>
            <NavLink className='btn' activeClassName='btn-active' exact to='/'>Home</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/listing'>Listing</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/functionalComp'>FunctionalCom</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/classComp'>ClassComp</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/withoutJSX'>WithoutJSX</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/counter'>Counter</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/parent-child'>Parent</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/conditionalRendering'>ConditionalRender</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/getApi'>GetApi</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/form'>Form</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/lifecycle'>Lifecycle</NavLink>
            <NavLink className='btn' activeClassName='btn-active' exact to='/shop'>IceCreamCakeShop</NavLink>
        </div>
    )
}

export default Menu
