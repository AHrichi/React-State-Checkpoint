
import Time from './Time'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Kozuki Oden",
        bio: "Kozuki Oden was the son of the former shogun Kozuki Sukiyaki, being a member of the Kozuki Family. He was the husband of Kozuki Toki and the father of Momonosuke and Hiyori. Additionally, he was the leader of a group of legendary and powerful samurai known as the Nine Red Scabbards, with all of them serving as his retainers and most trusted allies.For 5 years of his life, Oden set out to sea and became a pirate, serving as the 2nd division commander of the Whitebeard Pirates and later becoming a member of the Roger Pirates. After finding Joy Boys treasure on Laugh Tale, Oden journeyed home and made it his goal to open Wanos borders to the world by finally taking his father s place as Shogun. However, he met opposition from his usurper Kurozumi Orochi and pirate Kaido, who executed him 20 years before the present.",
        imgSrc: "https://pbs.twimg.com/media/Ea3xzPTX0AA_wAu.jpg",
        profession: "Daimyo of Kuri in Wano Country",
        shows: true,

      }
    }

  };

  
  handleShowPerson = () => {
    
    this.setState({
      shows: !this.state.shows,
      timer:this.state.timer+1
      
    });
    console.log(this.state.shows)
  };



  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}  >
        <Time/>
        <button style={{ border: '2px solid grey', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', color: 'white', backgroundColor: 'grey', fontSize: '24px', borderRadius: '8px', padding: '14px 40px' }} onClick={this.handleShowPerson}>{!this.state.shows ? 'Show' : 'Hide'}</button>
        {this.state.shows ?
        
          <div style={{ backgroundSize: 500, backgroundColor: '#282c3450', width: 1000, borderStyle: 'solid', borderRadius: 20, margin: 25, padding: 15 }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <h1>{this.state.Person.fullName}</h1>

              <img style={{ width: 150, height: 150, borderRadius: 100 }} src={this.state.Person.imgSrc} alt="Oden"></img>
            </div>
            <div style={{ margin: 25 }}>
              <h3>{this.state.Person.bio}</h3>
              <h2>{this.state.Person.profession}</h2>
            </div>

            
          </div>
          :<h1>Empty? Then press the button</h1>
          
        }

      </div>
    )
  }
  
}

export default App


