// import SvgIcon from '@/components/SvgIcon/index'
import { hello } from 'utils'
import './index.scss'

function Home() {
  hello()
  return <div className={'home'}>Hello world</div>
}

export default Home
