import { UpvoteButton } from "./UpvoteButton";
import { VisitButton } from "./VisitButton";
export function TitleSection() {
    return (
      <div className="title-section">
        <h1>VideoDubber - Fast Video Translator</h1>
        <div className="button-and-texts">
        <p>Translate videos in your own voice, globalize in a click!</p>
        <VisitButton/>
        <UpvoteButton/>

        </div>
      </div>
    );
  }
  