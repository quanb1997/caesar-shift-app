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
                
            }
            else if (str[i].charCodeAt() < 123 && charcode > 122) {
                charcode -= 26;
                
            }
        } else if (num < 0) {

            if (str[i].charCodeAt() > 64 && charcode < 65) {
                charcode += 26;
                
            }
            else if (str[i].charCodeAt() > 96 && charcode < 97) {
                charcode += 26;
                
            }
        }
        res += String.fromCharCode(charcode);
    }
    
    return res;
}

const Encrypt = ( {onInput} ) => {
    const [plain_text, setPlainText] = useState('')
    const [shift, setShift] = useState('')
    const [encrypted_text, setEncryptedText] = useState('')

    const onShift = (e) => {
        e.preventDefault()
    
        if(!plain_text && !encrypted_text) {
            alert('Please add plain text or encrypted text')
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
        
        var final_shift = Number(shift)
        if(final_shift > 26 || final_shift < 1) {
            final_shift = final_shift % 26
        }
        
        if(plain_text) {
            setEncryptedText(CaesarShift(plain_text, final_shift))
            setPlainText('')
        } else if(encrypted_text) {
            setPlainText(CaesarShift(encrypted_text, -1*final_shift))
            setEncryptedText('')
        }
        
        onInput({plain_text, final_shift, encrypted_text})
    }

    return (
        <form className='encrypter-form' onSubmit={onShift}>
            <div className='form-control'>
                <label>Text to shift</label>
                <input 
                    type='text' 
                    placeholder='Enter text to shift' 
                    value={plain_text}
                    onChange={(e) => setPlainText(e.target.value)}
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
                <label>Shifted Text</label>
                <input 
                    type='text' 
                    placeholder='Output will appear here' 
                    value={encrypted_text}
                    onChange={(e) => setEncryptedText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <input type='submit' value='Shift' className='btn btn-block'/>
            </div>
        </form>
    )
}
export default Encrypt