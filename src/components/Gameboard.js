import { connect } from 'react-redux';
import React, { Component } from 'react';
import '../index.css';
import Hole from './Hole';
import { addPoint } from '../actions/actions';

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 4,
            numberOfHoles: 6,
            activeHole: null,
            timeout: 4000
        }
    }

    componentDidMount() {
        setTimeout(this.tick, 0);
        setInterval(this.timer, 1000);
    }

    renderHoles = () => {
        let holes = [];
        for (let i = 1; i <= this.state.numberOfHoles; i++) {
            let active = this.state.activeHole === i ? true : false;
            holes[i] = ( <Hole
                    key={i}
                    active={active}
                    onClick={() =>
                        this.handleHoleClick(active)
                    }
                />
            );
        }
        return holes;
    };

    handleHoleClick = (active) => {
        if (!active) return;
        if ((this.props.points + 1) % 3 === 0 && this.props.points !== 0) {
            this.setState({timeout: this.state.timeout - 1000});
        }
        if ((this.props.points +1 ) === 9) {
            alert('Ты классный и ты начал массовый геноцид дыр!');
        }
        this.props.addPoint();
        this.setState({
            activeHole: null
        });
    };

    timer = () => {
        if (this.state.timer === 1 ) {
            this.setState({
                timer: this.state.timeout / 1000
            });
        } else {
            this.setState({
                timer: this.state.timer - 1
            });
        }
    };

    tick = () => {
        this.setState({
            activeHole: Math.ceil(Math.random() * this.state.numberOfHoles),
        });
        setTimeout(this.tick, this.state.timeout);
    };

    render () {
        return (
            <div className="center">
              <h1>Genocide of holes</h1>
              {this.renderHoles()}
              <hr />
                <p>Осталось: {this.state.timer} сек.</p>
              <p>Points: {this.props.points}</p>
            </div>
          );
    }
}

const mapStateToProps = state => ({
    points: state.points
});

const mapDispatchToProps = dispatch => ({
  addPoint: () => dispatch(addPoint())
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);