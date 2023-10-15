import React from "react";
import {useNavigate} from 'react-router-dom'

function Grid() {
  const navigate = useNavigate();  
    return (
      <>
      <div class="container mt-5">
          <div class="card" >
              <div class="row">
                  <div class="col-md-4">
                      <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/10/collage-maker-12-oct-2023-01-22-pm-1385.jpg?q=50&fit=crop&w=430&h=300&dpr=1.5" 
                      class="img-fluid"
                      />
                  </div>
                  <div class="col-md-8">
                      <h2 class="card-title mt-3"  style={{color:"red"}}>Is Assassin's Creed Mirage Worth It?</h2>
                      <p>Does the latest Assassin's Creed launch the series into new prominence or fall short of the haystack?</p>
                      <p>By  Sam Hallahan</p>
                      
                    <button className="btn btn-primary" onClick={() => {navigate("/News1")}}>Read more</button>
                      
                  </div>
              </div>
          </div>
      </div>
  
      <div class="container mt-5">
      <div class="card">
          <div class="row" >
              <div class="col-md-4">
                  <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/10/counter-strike-2-michael-jackson-peeking.jpg?q=50&fit=crop&w=430&h=300&dpr=1.5" class="img-fluid"></img>
              </div>
              <div class="col-md-8">
                  <h2 class="card-title mt-3"  style={{color:"red"}}>Counter-Strike 2 Players Are "Michael Jackson" Peeking Corners With New Exploit</h2>
                  <p> Counter-Strike 2's newest exploit lets players "Michael Jackson" lean around corners.</p>
                  <p>By  James Troughton</p>
                  <button className="btn btn-primary">Read more</button>
              </div>
          </div>
      </div>
      </div>
  
      <div class="container mt-5">
      <div class="card">
          <div class="row" >
              <div class="col-md-4">
                  <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/10/highrisemodernwarfare3.jpg?q=50&fit=crop&w=430&h=300&dpr=1.5" class="img-fluid"></img>
              </div>
              <div class="col-md-8">
                  <h2 class="card-title mt-3"  style={{color:"red"}}>Modern Warfare 3 Players Are Trickshotting From Highrise's Crane Like It's 2009</h2>
                  <p>Call of Duty players are hurling themselves off of Highrise's crane for trickshots just like they did 14 years ago.</p>
                  <p>By  George Foster</p>
                  <button className="btn btn-primary">Read more</button>
              </div>
          </div>
      </div>
      </div>
  
      <div class="container mt-5">
      <div class="card">
          <div class="row" >
              <div class="col-md-4">
                  <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/10/a-pirate-in-starfield-wear-a-red-astronaut-suit-firing-their-weapon-off-screen.jpg?q=50&fit=crop&w=430&h=300&dpr=1.5" class="img-fluid"></img>
              </div>
              <div class="col-md-8">
                  <h2 class="card-title mt-3"  style={{color:"red"}}>Starfield Fans Aren't Happy With "Laughable" Loot Drops</h2>
                  <p>Starfield's loot drops are little too stingy for fans, and someone killed one poor pirate 100 times to prove it.</p>
                  <p>By  Joshua Robertson</p>
                  <button className="btn btn-primary">Read more</button>
              </div>
          </div>
      </div>
      </div>

      <div class="mt-5" style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
        <button class="btn1" >VIEW MORE</button>
      </div>
      </>
    );
  }
  
  export default Grid;