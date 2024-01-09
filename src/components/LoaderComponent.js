import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
const LoaderComponent = (props) => {
  return (
    <div className="shimmer-container">
      {Array.from(new Array(8)).map((item, index) => (
        <Box key={index} sx={{ width: 400, marginRight: 0.5, my: 5 }}>
          <Skeleton variant="rectangular" width={400} height={400} />
        </Box>
      ))}
      ;
    </div>
  );
};

export default LoaderComponent;
