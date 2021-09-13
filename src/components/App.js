import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (input) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: input
      }

    }, () => console.log(this.state))
  }
  onFindPetsClick = () => {
    fetch(`/api/pets${(this.state.filters.type === 'all') ? '' : `?type=${this.state.filters.type}`}`)
      .then(response => response.json())
      .then(data => {
        
        this.setState({
        pets: [...data]
      }, () => console.log(data))})
      .catch(error => console.log(error))
  }
  onAdoptPet = (petID) => {
    console.log(petID)
    let dataArray = this.state.pets;
    dataArray.map((pet, index) => {

      if (pet.id === petID) {
        console.log(dataArray.length)
        pet.isAdopted = true

      } 
      this.setState({
        pets: dataArray
      })
      console.log(index)

    })




  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
