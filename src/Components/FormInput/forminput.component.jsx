import './forminput.styles.scss'


const FormInput = ({label, ...InputProps}) => {
    return(
        <div className='group'>
            
            <input className='form-input' placeholder=' ' {...InputProps}/>
            {
                label &&
                    (
                        <label className={`form-input-label`}>{label}</label>
                    )
                
            }
        </div>
    )
}

export default FormInput;