import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-2 items-center">
            <TextField size="small" label="Gender Name" />
            <TextField size="small" label="Gender Code" />
            <FormGroup> 
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Active"
              />
            </FormGroup>
            <Button variant="contained">Add</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
