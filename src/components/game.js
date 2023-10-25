import React, { Component } from 'react';

class MovingHeartShapeWithRandomCircles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0,
      positionY: 0,
      trail: [],
      heartSize: 10,
      trailSize: 10,
      trailColor: this.props.heartColor,
      circles: [],
      isPaused: true, // Add a pause state
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.spawnRandomCircles();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    const { isPaused } = this.state;
    
    if (event.key === 'p') {
      this.setState({ isPaused: !isPaused }); // Toggle the pause state
    }

    if (!isPaused) { // Only handle movement when not paused
      const { positionX, positionY, heartSize } = this.state;
      const characterSize = heartSize;
  
      const maxX = window.innerWidth - characterSize;
      const maxY = window.innerHeight - characterSize;
  
      if (event.key === 'a') {
        this.moveCharacter(Math.max(0, positionX - 10), positionY);
      } else if (event.key === 'd') {
        this.moveCharacter(Math.min(maxX, positionX + 10), positionY);
      } else if (event.key === 'w') {
        this.moveCharacter(positionX, Math.max(0, positionY - 10));
      } else if (event.key === 's') {
        this.moveCharacter(positionX, Math.min(maxY, positionY + 10));
      }
  
      this.checkCollisions();
    }
  }

  moveCharacter = (newX, newY) => {
    const { positionX, positionY, trail } = this.state;

    trail.push({
      left: positionX,
      top: positionY,
      color: 'transparent',
    });

    this.setState({
      positionX: newX,
      positionY: newY,
      trail,
    });

    setTimeout(() => {
      this.removeTrailElement();
    }, 10000); // 10 seconds in milliseconds
  }

  removeTrailElement = () => {
    const trail = [...this.state.trail];

    if (trail.length > 0) {
      trail.shift();
      this.setState({ trail });
    }
  }

  checkCollisions = () => {
    const { positionX, positionY, heartSize, circles } = this.state;

    const characterLeft = positionX;
    const characterRight = positionX + heartSize;
    const characterTop = positionY;
    const characterBottom = positionY + heartSize;

    const updatedCircles = [...circles];

    circles.forEach((circle, index) => {
      const circleLeft = circle.left;
      const circleRight = circle.left + circle.size;
      const circleTop = circle.top;
      const circleBottom = circle.top + circle.size;

      if (
        characterLeft < circleRight &&
        characterRight > circleLeft &&
        characterTop < circleBottom &&
        characterBottom > circleTop
      ) {
        updatedCircles.splice(index, 1);
        this.increaseHeartSize();
        this.increaseTrailSize();       
        this.updateTrailColor(circle.color);

      }
    });

    this.setState({ circles: updatedCircles });
  }

  increaseHeartSize = () => {
    this.setState((prevState) => ({ heartSize: prevState.heartSize + 1 }));
  }

  increaseTrailSize = () => {
    this.setState((prevState) => ({ trailSize: prevState.trailSize + 1 }));
  }

  updateTrailColor = (color) => {
    this.setState(({ trailColor: color }));
  }

  spawnRandomCircles = () => {
    setInterval(() => {
      const { isPaused } = this.state;

      if (!isPaused) {
        const circleSize = 20;
        const maxX = window.innerWidth - circleSize;
        const maxY = window.innerHeight - circleSize;
        const randomColor = this.getRandomColor();
  
        const newCircle = {
          left: Math.random() * maxX,
          top: Math.random() * maxY,
          size: circleSize,
          color: randomColor,
        };
  
        this.setState((prevState) => ({
          circles: [...prevState.circles, newCircle],
        }));
      }
    }, 5000); // Spawn a circle every 10 seconds
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const { positionX, positionY, trail, trailSize, trailColor, heartSize, circles } = this.state;

    return (
      <div>
        <div
          className="character-heart"
          style={{
            position: 'absolute',
            left: `${positionX}px`,
            top: `${positionY}px`,
            fontSize: `${heartSize}px`,
            color: this.props.heartColor,
            userSelect: 'none',
            pointerEvents: 'none',
            background: 'transparent',
            zIndex: '3',
            opacity:"70%"
          }}
        >
          &#10084; {/* Heart symbol */}
        </div>
        {trail.map((step, index) => (
          <div
            key={index}
            className="trail"
            style={{
              width: `${trailSize}px`,
              height: `${trailSize}px`,
              position: 'absolute',
              left: `${step.left}px`,
              top: `${step.top}px`,
              backgroundColor: trailColor,
              filter: `blur(5px)`,
              zIndex: '2',
              opacity: "10%",
            }}
          ></div>
        ))}
        {circles.map((circle, index) => (
          <div
            key={index}
            className="circle"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              position: 'absolute',
              left: `${circle.left}px`,
              top: `${circle.top}px`,
              backgroundColor: circle.color,
              borderRadius: '50%',
              zIndex: '2',
              opacity:"40%"
            }}
          ></div>
        ))}
      </div>
    );
  }
}

export default MovingHeartShapeWithRandomCircles;
