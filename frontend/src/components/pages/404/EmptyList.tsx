import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const EmptyList = ({ message, severity }: any) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  )
}

export default EmptyList