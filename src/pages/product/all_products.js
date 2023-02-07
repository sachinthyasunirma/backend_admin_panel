import TableCustom from "@/components/common_components/table/TableCustom";
import { Paper, Typography } from "@mui/material";

function AllProducts() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography gutterBottom variant="h6">
        All Products
      </Typography>
      <TableCustom/>
    </Paper>
  );
}

export default AllProducts;
