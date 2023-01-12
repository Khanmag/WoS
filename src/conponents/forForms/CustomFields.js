
// import { useField } from "react-final-form";

// const TextInput = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <input className="text-input" {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </>
//     );
// };

// const StandartInputFields = ({type, ...props}) => {
//     const [field, meta] = useField(props);
//     return (
//         <>
//         <label htmlFor={props.id || props.name}>{props.label}</label>
//         <input className="text-input" {...field} {...props} />
//         {meta.touched && meta.error ? (
//             <div className="error">{meta.error}</div>
//         ) : null}
//     </>
//     )
// }

// export const PassInput = (props) => {
//     return <StandartInputFields  {...props} />
// };

// const CheckboxInput = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//         <div>
//             <label className="checkbox-input">
//                 <input type="checkbox" {...field} {...props} />
//                 {children}
//             </label>
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </div>
//     );
// };