export function clearVal({setVal, val}) {
    try {
        setVal(val.slice(0, -1));
    } catch (error) { }
}
  
 export const equalTo = ({setVal, val}) => {
try {
  setVal(eval(val));
} catch (error) {
  
}
  }