import { Box } from '@mui/material'
import HeaderPages from '../Components/HeaderPages'
import MainLine from './MainLine'

function Line() {
  return (
    <Box>
    <HeaderPages title={"Line Chart"} desc={"Simple Line Chart"} />
    <MainLine/>
  </Box>
  )
}

export default Line