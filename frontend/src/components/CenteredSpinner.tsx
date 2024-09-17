import { Box, CircularProgress } from "@mui/material";

export const CenteredSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      position="fixed"
      top={0}
      left={0}
      width="100vw"
    >
      <CircularProgress />
    </Box>
  );
};
