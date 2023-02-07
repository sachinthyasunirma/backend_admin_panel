import {
  Button,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

function NewProduct() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography gutterBottom variant="h6">
        New Product
      </Typography>
      <Grid>
        <FormControl>
          <Grid container spacing={1}>
            <Grid xs={12} sm={12} item>
              <Typography gutterBottom variant="subtitle2">
                Category Details
              </Typography>
              <Divider />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                variant="outlined"
                // value={{""}}
                label="Category"
                placeholder="Select Category"
                fullWidth
                required
                select
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Divider />
            <Grid xs={12} sm={6} item>
              <TextField
                variant="outlined"
                // value={{""}}
                label="Sub Category"
                placeholder="Select Category"
                fullWidth
                required
                select
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Grid xs={12} sm={12} item>
              <Typography gutterBottom variant="subtitle2">
                Product Basic Details
              </Typography>
              <Divider />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Enter product name"
                label="Product Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Enter product code"
                label="Product Code"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} display="flex" direction="row" item>
              <Grid xs={4} sm={4} item>
                <TextField
                  variant="outlined"
                  // value={{""}}
                  label="Currency"
                  placeholder="Select Currency"
                  fullWidth
                  required
                  select
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid xs={8} sm={8} item>
                <TextField
                  placeholder="Enter product price"
                  label="Product Price"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                variant="outlined"
                // value={{""}}
                label="Unit"
                placeholder="Select product unit"
                fullWidth
                required
                select
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                variant="outlined"
                // value={{""}}
                label="Type"
                placeholder="Select product type"
                fullWidth
                required
                select
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                multiline
                rows={4}
                placeholder="Type your product description here"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <Typography gutterBottom variant="subtitle2">
                Product Stock and Order Limits
              </Typography>
              <Divider />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="number"
                placeholder="Enter stock"
                label="Product Stock"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="number"
                placeholder="Enter min order"
                label="Min Order"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="number"
                placeholder="Enter max order"
                label="Max Order"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <Typography gutterBottom variant="subtitle2">
                Product Specification
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Specification"
                multiline
                rows={8}
                placeholder="Type your product specification here"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </Paper>
  );
}

export default NewProduct;
