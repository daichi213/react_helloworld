// 全Reducerを1つに結合する役割をもつ
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({count})

// Reducerが複数ある場合は以下のように列挙すれば良い
// export default combineReducers({foo, bar, bazz})
