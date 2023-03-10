
import Button from "@mui/material/Button";
import React from "react";
import CommonTable from "./common/Table";
import MainModal from "./FormModal";

const loginData = {
  massage: "Login List",
  result: [
    {
      Id: 1,
      email: "John@gmail.com",
      fullName: "doe",
      mobileNumber: "123456",
      address: "codeKul,pune",
      pinCode: "424210",
      password: "2345",
    },
  ],
  statusCode: "200",
  actions: ["Edit", "Delete"],
};

function Form() {
  const [data, setData] = React.useState({ actions: [], result: [] });
  const [dataResult, setDataResult] = React.useState([]);

  // //open and close modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setData(loginData);
    setDataResult(loginData.result);
  }, []);

  console.log("data Result is", dataResult);
  // https://www.bezkoder.com/react-hook-form-material-ui-validation/
  return (
    <div className="mt-12 grid justify-center">
      <Button onClick={handleOpen}>Open modal</Button>

      <>
        {data.result.length > 0 ? (
          <CommonTable
            data={data}
            dataResult={dataResult}
            setDataResult={setDataResult}
          />
        ) : null}
      </>

      <MainModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default Form;
