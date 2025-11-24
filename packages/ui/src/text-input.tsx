type Proptype={
    placeholder:string;
    onchange?: (e:any)=>void;
}


export function TextInput({
    placeholder,onchange,
}:Proptype){
    return <input onChange={onchange} type="text" 
          placeholder={placeholder}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
          }} ></input>;
}