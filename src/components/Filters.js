import React from 'react'



class Filters extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    value: 'all'
  }
}
  updateChoice = (e) => {
    this.setState({
      value: e.target.value
    }, () => {
      this.props.onChangeType(this.state.value)
    })
  }
  render() {
    
    return (
      <div className="ui form">
        <h3 >Animal type</h3>
        <div className="field">
          <select onChange={this.updateChoice} value={this.state.value} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={() => {this.props.onFindPetsClick()}} className="ui secondary button">Find pets</button>
          
        </div>
      </div>
    )
  }
}

export default Filters
