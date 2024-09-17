import { useState } from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CenteredSpinner } from "../components/CenteredSpinner";
import { useGetUsers } from "../services/user-service";
import { User } from "./user-types";

export const UserList = () => {
  const [fetchEnabled, setFetchEnabled] = useState(false);
  const { data, isLoading } = useGetUsers(fetchEnabled);

  const handleFetchUsers = () => {
    setFetchEnabled(true);
  };

  return (
    <Box p={3}>
      <Button variant="outlined" sx={{ mb: 3 }} onClick={handleFetchUsers}>
        Daten laden
      </Button>

      {isLoading && <CenteredSpinner />}

      {!isLoading && data && (
        <Grid container spacing={2}>
          {data.map((user: User) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
              <Card variant="outlined" sx={{ minHeight: "250px" }}>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Username: {user.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {user.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Website: {user.website}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Address: {user.street}, {user.suite}, {user.city},{" "}
                    {user.zipcode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Company: {user.companyName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Catch Phrase: {user.catchPhrase}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
