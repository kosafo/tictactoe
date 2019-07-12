import React from 'react';
//import logo from './logo.svg';
import './App.css';

class Square extends React.Component {

  render() {
    return (
        <button className="square" style={this.props.background} onClick={() =>  this.props.onClick() }>
          {this.props.value}
        </button>
    );
  }
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(100).fill(null),
        };

        //this.renderPieces();
        //https://cdn0.iconfinder.com/data/icons/board-games/48/Paul-14-512.png
        //https://cdn0.iconfinder.com/data/icons/board-games-flat-1/48/Games_BoardGames_Artboard_15-512.png
        //https://cdn0.iconfinder.com/data/icons/board-games-flat-1/48/Games_BoardGames_Artboard_15-512.png
        //#1897D6
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = <img alt='' src='/game/app/src/img/draft_piece_blue.png' width='60px' height = '60px' />;
        this.setState({squares: squares});
    }


  renderSquare(i, row) {

      let darkbrown = {background:'#3c2814'};
      let lightbrown = {background:'#B71'};

    if (row % 2 === 0) {

        if (i % 2 === 0) {
            return <Square  value = {this.state.squares[i]} background={lightbrown} onClick = {() => this.handleClick(i)}/>;
        }
        else {
            return <Square  value = {this.state.squares[i]}  background={darkbrown} onClick={() => this.handleClick(i)} />;
        }
    }
    else {

        if (i % 2 === 0) {
            return <Square  value = {this.state.squares[i]}  background={darkbrown} onClick={() => this.handleClick(i)} />;
        }
        else {
            return <Square  value = {this.state.squares[i]}  background={lightbrown} onClick={() => this.handleClick(i)} />;
        }
    }


  }

  renderSquares(start, stop, row) {

      let squares = [];

      for (let i=start; i < stop; i++) {
          squares.push(this.renderSquare(i, row));
      }

      return squares;
  }


  render() {
    const p1 = 'Player 1';
    const p2 = 'Player 2';

    return (
        <div>
          <div className="status">{p1}</div>
          <div className="board-row">
              {this.renderSquares(0,10, 0)}
          </div>
          <div className="board-row">
              {this.renderSquares(10,20, 1)}
          </div>
          <div className="board-row">
              {this.renderSquares(20,30, 2)}
          </div>
          <div className="board-row">
              {this.renderSquares(30,40, 3)}
          </div>
          <div className="board-row">
              {this.renderSquares(40,50, 4)}
          </div>
          <div className="board-row">
              {this.renderSquares(50,60, 5)}
          </div>
          <div className="board-row">
              {this.renderSquares(60,70, 6)}
          </div>
          <div className="board-row">
              {this.renderSquares(70,80, 7)}
          </div>
          <div className="board-row">
              {this.renderSquares(80,90, 8)}
          </div>
          <div className="board-row">
              {this.renderSquares(90,100, 9)}
          </div>
          <div className="status">{p2}</div>
        </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}

// ========================================




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Game />
      </header>
    </div>
  );
}

export default App;
