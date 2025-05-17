import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import NewTask from "./NewTask";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function MyCard() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "35px auto",
        padding: 3,
        boxShadow: 5,
        borderRadius: 3,
        backgroundColor: "#ffffff",
        transition: "0.3s",
        "&:hover": {
          boxShadow: 8,
        },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#1976d2",
          transition: "0.3s",
          "&:hover": {
            color: "#004ba0",
          },
        }}
      >
        Tasks
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          sx={{
            "& .MuiTab-root": {
              fontWeight: 600,
              transition: "0.3s",
              color: "gray",
              "&.Mui-selected": {
                color: "#1976d2",
              },
              "&:hover": {
                color: "#0288d1",
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          <Tab value="one" label="All" />
          <Tab value="two" label="Complete" />
          <Tab value="three" label="Not Complete" />
        </Tabs>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
        <NewTask Title="Learn React" />
        <NewTask Title="Learn Js" />
        <NewTask Title="Learn Python" />
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          fullWidth
          id="filled-basic"
          label="Add Task"
          variant="filled"
          size="small"
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: 1,
            "& .MuiFilledInput-root": {
              borderRadius: 1,
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: 120,
            fontWeight: 600,
            backgroundColor: "#1976d2",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#004ba0",
              transform: "scale(1.05)",
            },
          }}
        >
          Add
        </Button>
      </Box>
    </Card>
  );
}
