function Input ({id, label, tipo, placeholder}) {

    return (

        <div className="campo">

            <label htmlFor={id}>{label}</label>

            <Input type={tipo}
            id={id}
            placeholder={placeholder}
            />
        </div>
    )
}