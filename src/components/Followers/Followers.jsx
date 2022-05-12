import { Grid } from "../Grid/Grid";
import { FollowersCard } from "../FollowersCard/FollowersCard";

const Followers = props => {
  return (
    <Grid rows={1} columns={4}>
      <FollowersCard
        social="facebook"
        handle="@nathanf"
        followerCount={1987}
        followerChange={0}
      />
      <FollowersCard
        social="twitter"
        handle="@nathanf"
        followerCount={1044}
        followerChange={0}
      />
      <FollowersCard
        social="instagram"
        handle="@realnathanf"
        followerCount={11000}
        followerChange={0}
      />
      <FollowersCard
        social="youtube"
        handle="Nathan F."
        followerCount={8239}
        followerChange={0}
      />
    </Grid>
  );
};

export { Followers };
