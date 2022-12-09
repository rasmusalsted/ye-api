
const Employee = (props) => {

    const {name, id} = props
    
    return (
      <div>
          <h1>{`name: ${name} id: ${id}`}</h1>
      </div>
    )
}
 
export default Employee;