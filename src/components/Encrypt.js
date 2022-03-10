import React, { useState } from 'react'

function CaesarShift(str, num) {
    var res = '';
    var charcode = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (!str[i].match(/^[a-z0-9]+$/i)) {
            res += str[i];
            continue;
        }

        charcode = (str[i].charCodeAt()) + num;
        if (num > 0) {
            if (str[i].charCodeAt() < 91 && charcode > 90) {
                charcode -= 26;
                console.log(charcode)
            }
            else if (str[i].charCodeAt() < 123 && charcode > 122) {
                charcode -= 26;
                console.log(charcode)
            }
        } else if (num < 0) {

            if (str[i].charCodeAt() > 64 && charcode < 65) {
                charcode += 26;
                console.log(charcode)
            }
            else if (str[i].charCodeAt() > 96 && charcode < 97) {
                charcode += 26;
                console.log(charcode)
            }
        }
        res += String.fromCharCode(charcode);
    }
    
    return res;
}

const Encrypt = ( {onInput} ) => {
    const [red_text, setRedText] = useState('')
    const [shift, setShift] = useState('')
    const [black_text, setBlackText] = useState('')

    const onShift = (e) => {
        e.preventDefault()
    
        if(!red_text && !black_text) {
            alert('Please add red text or black text')
            return
        }
        if(!shift) {
            alert('Please select a number to shift by')
            return
        }
        if (isNaN(shift)) 
        {
            alert("shift must be a number");
            return
        }
        console.log(shift)
        var final_shift = Number(shift)
        if(final_shift > 26 || final_shift < 1) {
            final_shift = final_shift % 26
        }
        console.log(final_shift)
        if(red_text) {
            setBlackText(CaesarShift(red_text, final_shift))
            setRedText('')
        } else if(black_text) {
            setRedText(CaesarShift(black_text, -1*final_shift))
            setBlackText('')
        }
        console.log(red_text);
        onInput({red_text, final_shift, black_text})
    }

    return (
        <form className='encrypter-form' onSubmit={onShift}>
            <div className='form-control'>
                <label>Red Text (Text to shift)</label>
                <input 
                    type='text' 
                    placeholder='Enter text to shift' 
                    value={red_text}
                    onChange={(e) => setRedText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Number to shift by</label>
                <input 
                    type='text' 
                    placeholder='Enter number to shift by' 
                    value={shift}
                    onChange={(e) => setShift(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Black Text (Shifted Text)</label>
                <input 
                    type='text' 
                    placeholder='Output will appear here' 
                    value={black_text}
                    onChange={(e) => setBlackText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <input type='submit' value='Shift' className='btn btn-block'/>
            </div>
        </form>
    )
}
export default Encrypt