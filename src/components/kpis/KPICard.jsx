import React from 'react';
import {
  Card,
  CardContent,
  Typography
} from "@material-ui/core";

const KPICard = ({ title, value }) => {
  return (
    <div className="kpi-card">
      <Card>
        <CardContent>
          <Typography component="h5" variant="h5">
            { title }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            { value }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default KPICard;