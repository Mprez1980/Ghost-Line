import './VisualFeed.css';

interface VisualFeedProps {
  summary?: string;
  sceneId: string;
}

export default function VisualFeed({ summary, sceneId }: VisualFeedProps) {
  // If no summary is provided, show a default "searching" message
  const displayText = summary || 'SCANNING FOR NEURAL DATA... // SIGNAL UNKNOWN';
  
  // Random status indicators for "tech" feel
  const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  return (
    <div className="visual-feed" key={sceneId}>
      <div className="feed-header">
        <div className="header-left">
          <span className="feed-beacon"></span>
          <span>UPLINK: ACTIVE</span>
        </div>
        <div className="header-right">
          <span>{timestamp}</span>
        </div>
      </div>

      <div className="feed-glitch-overlay"></div>
      <div className="feed-scanline"></div>

      <div className="feed-content">
        <p className="visual-summary">
          {displayText}
        </p>
      </div>

      <div className="feed-footer">
        <div className="footer-left">RECONSTRUCTION: 84%</div>
        <div className="footer-right">SYS.GHOST_LINE.01</div>
      </div>
    </div>
  );
}
