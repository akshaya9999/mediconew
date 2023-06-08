import {
    Card,
    CardHeader,
    CardBody,
    Typography,

  } from "@material-tailwind/react";
   
  export default function Cards() {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src="https://media.istockphoto.com/id/179172059/photo/green-checkmark.webp?b=1&s=170667a&w=0&k=20&c=hyS6gTLO_8ust78lJILpJE2h5TsydpeNexekxYScVSM=" alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            VALIDATE
          </Typography>
        </CardBody>
      </Card>
    );
  }