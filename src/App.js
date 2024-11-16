import React from "react";

function App() {
  return (
    <div>
      {/* Top-level heading */}
      <h1>Hi, I'm Jane Doe</h1>

      {/* Profile image */}
      <img src="https://via.placeholder.com/350" alt="My profile pic" />

      {/* About Me section */}
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Links */}
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>

      {/* Form (already working) */}
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="Enter your email" />
        </div>
        <fieldset>
          <legend>Select your interests:</legend>
          <div>
            <input id="Coding" type="checkbox" value="Coding" />
            <label htmlFor="Coding">Coding</label>
          </div>
          <div>
            <input id="Music" type="checkbox" value="Music" />
            <label htmlFor="Music">Music</label>
          </div>
          <div>
            <input id="Travel" type="checkbox" value="Travel" />
            <label htmlFor="Travel">Travel</label>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
