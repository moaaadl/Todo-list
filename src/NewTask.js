import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function NewTask({ Title }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #d0d0d0",
        borderRadius: 2,
        padding: "10px 16px",
        backgroundColor: "#f9f9f9",
        boxShadow: 1,
        transition: "0.3s",
        height: "30px",
        "&:hover": {
          backgroundColor: "#e0f7fa",
          boxShadow: 3,
          borderColor: "#00bcd4",
          height: "50px",
        },
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        {Title}
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <AddCircleOutlineOutlinedIcon
          sx={{
            cursor: "pointer",
            color: "green",
            transition: "0.2s",
            "&:hover": {
              color: "#00e676",
              transform: "scale(1.2)",
            },
          }}
          fontSize="small"
        />

        <EditOutlinedIcon
          sx={{
            cursor: "pointer",
            color: "#3D90D7",
            transition: "0.2s",
            "&:hover": {
              color: "#1976d2",
              transform: "scale(1.2)",
            },
          }}
          fontSize="small"
        />

        <DeleteOutlineOutlinedIcon
          sx={{
            cursor: "pointer",
            color: "red",
            transition: "0.2s",
            "&:hover": {
              color: "#ff1744",
              transform: "scale(1.2)",
            },
          }}
          fontSize="small"
        />
      </Box>
    </Box>
  );
}
