import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import React from "react";

const ApplicationForm = () => {
  return (
    <div>
      <div className="w-full">
        <Card className="max-w-[450px] mx-auto">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Tree Cutting/Pruning Application Form
            </Typography>
            <form>
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-5">
                  Tree Name
                </Typography>
                <Input
                  placeholder="Tree Name"
                  className=" !border-t-blue-gray-200 focus:!border-blue-700"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0 text-end">
            <Button className="bg-blue-700" loading={false}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationForm;
