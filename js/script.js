 body {
    text-align: center;
    margin-top: 80px; /* 👈 esto lo centra como antes */
    background: transparent; /* 👈 sin fondo */
    font-family: 'Georgia', serif;
  }

  .player {
  display: flex;
  flex-direction: column;
  align-items: center; /* 🔥 esto centra TODO */
  }

  .play-btn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 28px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;
    background: transparent;
  }

  .play-btn:hover {
    background: rgba(107,112,92,0.1);
  }

  .progress-container {
    width: 200px;
    height: 4px;
    background: rgba(214,211,205,0.6);
    margin: 20px auto;
    border-radius: 2px;
    cursor: pointer;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    width: 0%;
    background: #ffffff;
  }

  .caption {
    margin-top: 10px;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 2px;
  }
