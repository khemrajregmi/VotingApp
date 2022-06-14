import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import axios from 'axios';
//import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Router , {useRouter}  from 'next/router';

export const AddCanidate = (props) => {
  const [values, setValues] = useState({
    candidateCode: '',
    candidateName: '',
    candidateSign: ''
  });
  const router = useRouter()
  const slug = router.query.slug
  console.log('this is slug',slug)
  const [slugData, setSlugData] = useState(slug)
  console.log('this is slugData',slugData)

  const data = slugData.split(",")
  console.log('this is test',data,slug)
  const [startDateTime, setStartValues] = useState('');
  const [endDateTime, setEndValues] = useState('');


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeStartDateTime = (newValue) => {
    setStartValues(newValue);
  };

  const handleChangeEndDateTime = (newValue) => {
    setEndValues(newValue);
  };
console.log('yo date and time ho ',startDateTime,startDateTime)

 function handleSubmit() {
    // POST request using axios with async/await
    const data = {  
                  campaignCode: data[0],
                  areaCode: data[1],
                  candidateCode: value.candidateCode,
                  candidateName: value.candidateName,
                  candidateSign: value.candidateSign
                   }
    const response =  axios.post('https://decentralized-ivoting.herokuapp.com/add-campaign', data)
    router.push(`/canidates/${slugData}`)
    // this.setState({ articleId: response.data.id })
}

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Add New Canidate"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Canidate Name"
                label="Canidate Name"
                name="candidateName"
                onChange={handleChange}
                required
                value={values.candidateName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Canidate Code"
                label="Canidate Code"
                name="candidateCode"
                onChange={handleChange}
                required
                value={values.candidateCode}
                variant="outlined"
              />
            </Grid>
           
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Canidate Sign"
                label="Canidate Sign"
                name="candidateSign"
                onChange={handleChange}
                required
                value={values.candidateSign}
                variant="outlined"
              />
            </Grid>
            
           
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit} 
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

