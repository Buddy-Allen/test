import {addB} from './moduleB'
import {addC} from './moduleC'
import '../style/main.es6.scss'

addB();

$('#box').on('click',function(){
    addC();

})
