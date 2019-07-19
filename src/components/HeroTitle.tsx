import React from "react";
import Typography from "@material-ui/core/Typography";

export const HeroTitle = () => {
  return (
    <React.Fragment>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Things I've Built
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Showcase the projects you have built, and see what your peers are
        building.
      </Typography>
    </React.Fragment>
  );
};
