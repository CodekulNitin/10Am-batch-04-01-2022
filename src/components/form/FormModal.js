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
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit =(dataObj) =>{
    console.log("modalData is:",dataObj);
    let orignalData = props.data
    orignalData.result.push(dataObj)
    props.setData(orignalData)
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-2 items-center">
            <TextField size="small" name="gnederName" label="Gender Name"{...register("genderName")} />
            <TextField size="small" name="genderCode" label="Gender Code" {...register("genderCode")} />
            <FormGroup> 
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Active"
                name="active"
                {...register("active")}
              />
            </FormGroup>
            <Button type="submit" variant="contained">Add</Button>
          </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
