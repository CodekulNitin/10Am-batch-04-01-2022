import { Button } from "@mui/material";
import React from "react";

import FormModal from "./FormModal";
import Table from './common/Table'

const formData= {
  result:[
    {
      id:1,
      fullName:"codekul",
      address:"kothrud depot",
      active:true
    },
    {
      id:2,
      fullName:"codekul",
      address:"kothrud depot",
      active:true

    },
    {
      id:3,
      fullName:"codekul",
      address:"kothrud depot",
      active:false

    },
    {
      id:4,
      fullName:"codekul",
      address:"kothrud depot",
      active:true

    },
  ]
}

function Form() {
  const [data,setData]= React.useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect (()=>{

  },[])

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add New
      </Button>
      <FormModal data={data} setData={setData} open={open} handleClose={handleClose} />
      <Table data={data}/>
    </div>
  );
}

export default Form;
