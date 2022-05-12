import { Card } from "./FollowersCard.styles";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";
import YoutubeIcon from "../../assets/images/icon-youtube.svg";

const socialImages = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const FollowersCard = ({ social, handle, followerCount, followerChange }) => {
  return (
    <Card>
      <div>
        <img src={socialImages[social]} alt={`${social} logo`} /> {handle}
      </div>
      <div>
        <div>{followerCount}</div>
        <div>followers</div>
      </div>
      <div>

      </div>
    </Card>
  );
};

export { FollowersCard };
