import './forminput.styles.scss'


const FormInput = ({label, ...InputProps}) => {
    return(
        <div className='group'>
            
            <input className='form-input' placeholder=' ' {...InputProps}/>
            {
                label &&
                    (
                        <label className={`${InputProps.value.lenght > 0 ? 'shrink' : '' } form-input-label`}>{label}</label>
                    )
                
            }
        </div>
    )
}

export default FormInput;