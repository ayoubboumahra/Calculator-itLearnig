import { useState } from "react"
import CalculatorContext from "./CalculatorContext"
import calculateString  from 'calculate-string'

export default ({ children }) => {

    const [text, setText] = useState('');

    const [ num, setNum ] = useState('0');
    
    const [reset, setReset] = useState(false);
    
    const [ count, setCount ] = useState(0);
    
    const [ countOperation, setCountOperation ] = useState(0);

    const [ operation, setOperation ] = useState('');

    const operations = ['+', '-', '/', '*'];

    let c = 0;


    const changeNum = (val) => {

        if( num === '0' ) {

            setNum('');
        
        }

        if( reset == true ) {

            setNum('');

            setCount( count => count + 1 );

            setCountOperation( c => c + 1);

        }

        setNum(num => num.concat(val));

        setText(text => text.concat( val ));

        setReset(false);
    }

    const resetAll = () => {

        setNum('0');
        
        setText('');
        
        setCountOperation(0);
        
        setReset(false);
        
        setCount(0);
    
    }

    const equal = () => {

        setNum(num => calculateString(text));

        setCountOperation(0);
        
        setReset(false);
        
        setCount(0);

    }

    const clickOperation = (val) => {

        if(text.length == 0){
            return;
        }

        const split = text.split(' ');

        console.log(split);

        if(split[split.length-1] == "" && val == split[split.length - 2]){
            return;
        }



        setText(text => text.concat(' ' + val + ' '));


        

        if( count >= 1 ) {

            setNum( num => calculateString(text) );

            setCountOperation(0);

        }

        setReset(true);

    }

    const removeLast = () => {
        
        if(num != '0'){

            let split = text.split(' ');

            if(num.length > 1) {
                
                let n = num.substring(0, num.length - 1);

                setNum(n);

                split[split.length - 1] = n;
            
            } else {

                split[split.length - 1] = '';

                setNum('0');

            }
            
            setText(split.join(' '));

        }
    
    }

    return (
        <CalculatorContext.Provider 
            value={{ text, num, changeNum, reset, clickOperation, resetAll, equal, removeLast }}
        >
            { children }
        </CalculatorContext.Provider>
    )
}