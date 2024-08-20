// import { sayGoodbye as bye, hel } from "./module1.js"

import * as say from "./module1.js"

function sayHi () {
    console.log('Hi Modules')
}

sayHi()
// bye()
// hel()

say.sayHello()
say.sayGoodbye()


// import จาก export default ไม่ต้องใส่ {...} 
import helloJS from "./module2.js"
helloJS();