import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const EmptyList = ({ message, severity, children }: any) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>{message || children}</Alert>
    </Stack>
  )
}

export default EmptyList