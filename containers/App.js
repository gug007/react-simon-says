import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Item from '../components/board/Item'
import * as actions from '../actions'

class App extends Component{
  constructor(props) {
    super(props);
    this.actions =  bindActionCreators(actions, this.props.dispatch)
  }

  move(moves, i) {
    const { speed } = this.props.game;
    this.actions.initMove(moves[i])
    setTimeout(()=>{
      this.actions.initMove(0);
      i < moves.length
        ? setTimeout(() => this.move(moves, ++i) , 30)
        : this.actions.changePlayer(true);
    }, speed*1000)
  }

  getMoves(level) {
    const [min, max] = [1, 4];
    let moves = [];
    for (let i=0; i<level; i++){
      let rand = Math.round(min + Math.random() * (max - min))
      moves.push(rand);
    }
    return this.actions.updateMoves(moves).moves
  }

  handleStart() {
    this.actions.newGame();
    this.move(this.getMoves(1), 0);
  }

  handleClick(e) {
    this.actions.initMove(parseInt(e.target.id))
    setTimeout(()=> this.actions.initMove(0) , 500)
    let { pressedMoves, moves, level } = this.props.game;
    this.actions.addMove(e.target.id);
    if(moves[pressedMoves.length-1] == e.target.id) {
      if(pressedMoves.length === moves.length){
        console.log('new level')
        setTimeout(()=> this.move(this.getMoves(level+1), 0) , 500)
      }
    } else {
      this.actions.gameOver();
    }
  }

  handleChange(e){
    this.actions.updateSpeed(e.target.value);
  }

  render(){
    const { items, active } = this.props.board;
    const { user, level, status, speed } = this.props.game;

    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>Simon Says</h1>
          <hr />
        </div>
        <div className="col-xs-offset-2 col-xs-6">
        {items.map(data =>
          <Item key={data.id} handleClick={this.handleClick.bind(this)} user={user} data={data} active={active}></Item>
        )}
        </div>
        <div className="col-xs-2">
          <h2>level: {level}</h2>
          <div>{status}</div>
          <div className="form-group">
            <button className="btn btn-default" onClick={this.handleStart.bind(this)}>start</button>
          </div>
          <select className="form-control" onChange={this.handleChange.bind(this)}>
            <option value="1.5">Easy</option>
            <option value="1.0">Medium</option>
            <option value="0.4">Hard</option>
          </select>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    game: state.game
  }
}

export default connect(mapStateToProps)(App)