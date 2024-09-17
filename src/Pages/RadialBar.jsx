import { Box } from '@mui/system'
import HeaderPages from '../Components/HeaderPages'
import MainRadialBar from './MainRadialBar'

const Radar = () => {
  return (
    <Box>
      <HeaderPages title={"RadialBar Chart"} desc={"Simple Radial Bar Chart"} />
      <MainRadialBar/>
    </Box>
  )
}

export default Radar