import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
function HeaderPages({ title, desc }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: "40px",
        pb: "35px",
        pt: "15px",
        maxWidth: "500px",
        mx: "auto",
        textAlign: "center",
        borderBottom: `2px solid ${theme.palette.text.primary}`,
        borderRadius: "30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: "bold",
          mb: "5px",
        }}
      >
        {title}
      </Typography>
      <Typography variant="h6">{desc}</Typography>
    </Box>
  );
}

export default HeaderPages;
