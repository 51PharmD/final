const labEmojis = ["🥼", "🥼", "🥼", "🥼"];

class EmojiAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emojis: [] };
    this.emojiCount = 13;
  }

  componentDidMount() {
    this.createEmojis();
    setTimeout(() => this.setState({ emojis: [] }), 5000);
  }

  createEmojis() {
    const newEmojis = Array.from({ length: this.emojiCount }, (_, i) => ({
      id: i,
      emoji: labEmojis[Math.floor(Math.random() * labEmojis.length)],
      style: this.randomStyle()
    }));
    this.setState({ emojis: newEmojis });
  }

  randomStyle() {
    return {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 1}s`,
      fontSize: `${Math.random() * 4 + 3}rem`
    };
  }

  render() {
    return (
      <div className="emoji-animation">
        {this.state.emojis.map(e => (
          <span key={e.id} className="floating-emoji" style={e.style}>
            {e.emoji}
          </span>
        ))}
      </div>
    );
  }
}

function triggerEmojiAnimation(e) {
  // Show animation
  const container = document.getElementById('emoji-container');
  ReactDOM.render(<EmojiAnimation />, container);
  
  // Temporarily disable link
  e.preventDefault();
  setTimeout(() => {
    window.open('https://www.instagram.com/Pharm_d51', '_blank');
  }, 4000);
  
  // Limit to 3 uses per session
  if (!sessionStorage.getItem('eggCount')) sessionStorage.setItem('eggCount', 0);
  const count = parseInt(sessionStorage.getItem('eggCount')) + 1;
  sessionStorage.setItem('eggCount', count);
  if (count >= 3) document.getElementById('main-logo').onclick = null;
}
